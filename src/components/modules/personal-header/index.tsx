import { Wrapper } from "../../ui/wrapper";
import { SecondaryButton } from "../../ui/secodary-button";
import "./gradient.css";
import { Modal } from "../../ui/modal";
import { UserMenu } from "../user-menu";
import { useEffect, useMemo, useState } from "react";
import { PrimaryButton } from "../../ui/primary-button";
import { Link, useParams } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { AccountType } from "../../../types/types";
import { useImage } from "../../../hooks";
import avatar from "../../../common/assets/images/avatar.png";
import { Router } from "../../router";

export interface PersonalHeaderProps {
  account: AccountType;
}

const DEFAULT_STYLE = `text-indigo-800 border-indigo-800 hover:text-indigo-800 hover:border-indigo-800`;

export const PersonalHeader = ({ account }: PersonalHeaderProps) => {
  const [userModalDisplay, setUserModalDisplay] = useState(false);
  const [selectedButton, setSelectedButton] = useState(Router.about);
  const { id } = useParams();
  const { setSelectedUser, user } = useUserContext();
  const isPageOwner = useMemo(() => `${user?.id}` === id, [user, id]);
  const image = useImage(account);

  useEffect(() => {
    if (account) setSelectedUser(account);
  }, []);

  return (
    <Wrapper className="gradient mb-10 flex h-72 w-full flex-col justify-between bg-indigo-400 pt-24 sm:pt-24">
      <div className="flex w-full gap-x-5">
        <img
          src={image}
          alt=""
          className="h-32 w-32 rounded object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = avatar;
          }}
        />
        <div className="flex flex-col items-start gap-2">
          <div className="text-lg text-gray-900">{account.name}</div>
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-2 ">
        <Link to={Router.books} onClick={() => setSelectedButton(Router.books)}>
          <SecondaryButton
            className={`${
              Router.books === selectedButton ? DEFAULT_STYLE : ""
            }`}
          >
            Книги
          </SecondaryButton>
        </Link>
        <Link to={Router.blogs} onClick={() => setSelectedButton(Router.blogs)}>
          <SecondaryButton
            className={`${
              Router.blogs === selectedButton ? DEFAULT_STYLE : ""
            }`}
          >
            Блог
          </SecondaryButton>
        </Link>
        <Link to={Router.about} onClick={() => setSelectedButton(Router.about)}>
          <SecondaryButton
            className={`${
              Router.about === selectedButton ? DEFAULT_STYLE : ""
            }`}
          >
            Обо мне
          </SecondaryButton>
        </Link>
        {isPageOwner && (
          <PrimaryButton
            className=""
            onClickButton={() => setUserModalDisplay(true)}
          >
            Другое
          </PrimaryButton>
        )}
      </div>
      {userModalDisplay && (
        <Modal displayModal={setUserModalDisplay}>
          <UserMenu />
        </Modal>
      )}
    </Wrapper>
  );
};
