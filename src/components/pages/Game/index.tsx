import React, { useState } from "react";
import { FaBaseballBall } from "react-icons/fa";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import Button from "../../ui/button";
import { Modal } from "../../ui/modal";
import success from "../../../common/assets/sounds/success.mp3";

import "./game.css";
import { Link } from "react-router-dom";

const images = [
  "https://klike.net/uploads/posts/2020-02/1581928363_1.jpg",
  "https://klike.net/uploads/posts/2020-02/1581928384_10.jpg",
  "https://klike.net/uploads/posts/2020-02/1581928331_11.jpg",
  "https://klike.net/uploads/posts/2020-02/1581928344_13.jpg",
  "https://klike.net/uploads/posts/2020-02/1581928391_18.jpg",
  "https://klike.net/uploads/posts/2020-02/1581928332_19.jpg",
  "https://klike.net/uploads/posts/2020-02/1581928359_20.jpg",
  "https://klike.net/uploads/posts/2020-02/1581928388_21.jpg",
  "https://klike.net/uploads/posts/2020-02/1581928361_22.jpg",
  "https://klike.net/uploads/posts/2020-02/1581928354_24.jpg",
  "https://klike.net/uploads/posts/2020-02/1581928411_26.jpg",
];

export const Game = () => {
  const [startDisplayModal, setStartDisplayModal] = useState(true);
  const [timer, setTimer] = useState(20);
  const [image, setImage] = useState(images[0]);
  const [eye, setEye] = useState(true);
  const [gameLevel, setGameLevel] = useState(new Array(5).fill(false));
  const [gameLevelModal, setGameLevelModal] = useState(
    new Array(5).fill(false)
  );

  const handleStartGame = () => {
    setStartDisplayModal(false);
    setGameLevelModal(gameLevelModal.map((_, index) => index === 0));
  };

  const handleStartLevel = () => {
    const levelNumber = gameLevelModal.findIndex((item) => item);
    setGameLevelModal(gameLevelModal.map((_) => false));
    setGameLevel(gameLevel.map((_, index) => index === levelNumber));

    let timerId: NodeJS.Timer;
    let eyeId: NodeJS.Timer;
    let appearId: NodeJS.Timer;
    if (levelNumber === 1) {
      let currentEye = true;
      eyeId = setInterval(() => {
        currentEye = !currentEye;
        setEye(currentEye);
      }, 200);
    }

    let t = 20;
    setTimer(t);
    timerId = setInterval(() => {
      --t;
      setTimer(t);
    }, 1000);

    setTimeout(() => {
      const sound = new Audio(success);
      sound.play();

      clearInterval(eyeId);
      clearInterval(timerId);
      clearInterval(appearId);

      setGameLevelModal(
        gameLevelModal.map((_, index) => index === levelNumber + 1)
      );
      setGameLevel(gameLevel.map((_) => false));
    }, 20000);
  };

  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-teal-200">
      <span className="absolute bottom-2 right-2 text-5xl font-bold text-indigo-400">
        {timer}
      </span>
      {gameLevel[0] && (
        <FaBaseballBall
          className={`circle text-5xl text-indigo-400 transition-all`}
        />
      )}
      {gameLevel[1] && (
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-5">
          {eye ? (
            <div className="flex gap-x-5">
              <RxEyeOpen className="text-8xl text-indigo-400" />
              <RxEyeOpen className="text-8xl text-indigo-400" />
            </div>
          ) : (
            <div className="flex gap-x-5">
              <RxEyeClosed className="text-8xl text-indigo-400" />
              <RxEyeClosed className="text-8xl text-indigo-400" />
            </div>
          )}
        </div>
      )}
      {gameLevel[2] && (
        <FaBaseballBall
          className={`line text-5xl text-indigo-400 transition-all`}
        />
      )}
      {gameLevel[3] && (
        <img
          src={image}
          alt=""
          className="h-full w-full object-contain"
          onClick={() =>
            setImage(images[images.findIndex((item) => item === image) + 1])
          }
        />
      )}
      {gameLevel[4] && (
        <FaBaseballBall
          className={`figure text-5xl text-indigo-400 transition-all`}
        />
      )}
      {startDisplayModal && (
        <Modal displayModal={setStartDisplayModal}>
          <div className="flex flex-col ">
            <p className="mb-5 max-w-[300px]">
              Гимнастика для глаз – это эффективная и простая помощь при
              переутомлении зрения, которую вы можете оказать себе
              самостоятельно.
            </p>
            <Button onClick={handleStartGame}>Начать</Button>
          </div>
        </Modal>
      )}
      {gameLevelModal[0] && (
        <Modal displayModal={setStartDisplayModal}>
          <div className="flex flex-col ">
            <p className="mb-5 max-w-[300px]">Следите за движущимся объектом</p>
            <Button onClick={handleStartLevel}>Начать</Button>
          </div>
        </Modal>
      )}
      {gameLevelModal[1] && (
        <Modal displayModal={setStartDisplayModal}>
          <div className="flex flex-col ">
            <p className="mb-5 max-w-[300px]">Быстро моргайте</p>
            <Button onClick={handleStartLevel}>Начать</Button>
          </div>
        </Modal>
      )}
      {gameLevelModal[2] && (
        <Modal displayModal={setStartDisplayModal}>
          <div className="flex flex-col ">
            <p className="mb-5 max-w-[300px]">Следите за движущимся объектом</p>
            <Button onClick={handleStartLevel}>Начать</Button>
          </div>
        </Modal>
      )}
      {gameLevelModal[3] && (
        <Modal displayModal={setStartDisplayModal}>
          <div className="flex flex-col ">
            <p className="mb-5 max-w-[300px]">
              Стереограммы или стереокартинки для глаз — это плоские
              изображения, в которых зашифрована трехмерная картинка на фоне
              одинаковых узоров. Стереограммы используют для тренировки
              бинокулярного зрения.
            </p>
            <p className="mb-5 max-w-[300px]">
              Сфокусируйте взгляд на изображении и расслабьте мышцы глаз,
              смотрите как бы сквозь него. Если вы смогли рассмотреть
              зашифрованное изображение нажмите в любую точку картинки
            </p>
            <Button onClick={handleStartLevel}>Начать</Button>
          </div>
        </Modal>
      )}
      {gameLevelModal[4] && (
        <Modal displayModal={setStartDisplayModal}>
          <div className="flex flex-col ">
            <p className="mb-5 max-w-[300px]">Следите за движущимся объектом</p>
            <Button onClick={handleStartLevel}>Начать</Button>
          </div>
        </Modal>
      )}

      {gameLevelModal.every((item) => !item) &&
        gameLevel.every((item) => !item) &&
        !startDisplayModal && (
          <Modal displayModal={setStartDisplayModal}>
            <div className="flex flex-col">
              <p className="mb-5 max-w-[300px]">
                Зарядка выполнена. Поздравляю!
              </p>
              <Link to="/">
                <Button>Выйти</Button>
              </Link>
            </div>
          </Modal>
        )}
    </div>
  );
};
