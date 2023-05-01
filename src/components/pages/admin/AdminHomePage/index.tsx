import { useState } from "react";
import { PageWrapper } from "../../../ui/wrappers/PageWrapper";
import { Wrapper } from "../../../ui/wrappers/Wrapper";
import { useUsers } from "../../../../hooks/user/useUsers";
import { Button } from "../../../ui/buttons/Button";
import { handleImageError, processImage } from "../../../../utils/utils";
import { Modal } from "../../../ui/modals/NewModal";
import { BanMenu } from "../BanMenu/intex";

export const AdminHomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState("");
  const { users, banUser, isUpdateLoading } = useUsers({ disabled: false });

  const handleBanUser = (id: string, data) => {
    banUser({ id, ...data });
    setModalIsOpen(false);
  };

  return (
    <div className="flex w-full flex-col items-center justify-between overflow-hidden">
      <Wrapper className="">
        {users && (
          <div className="flex flex-col gap-y-10">
            <PageWrapper
              isTop={true}
              title="Пользователи"
              className="w-full text-xl"
            >
              {users
                .filter((u) => u.role.value !== "ADMIN")
                .map(({ id, name, img, email, autobiography }, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b-2 pb-2"
                  >
                    <div className="flex text-lg">
                      <img
                        className="mr-5 h-32 w-32 object-cover"
                        src={processImage(img)}
                        alt=""
                        onError={handleImageError}
                      />
                      <div className="flex flex-col gap-y-2">
                        <div className="font-medium">{name}</div>
                        <div>{email}</div>
                        <div className="line-clamp-2">{autobiography}</div>
                      </div>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          setId(`${id}`);
                          setModalIsOpen(true);
                        }}
                      >
                        Забанить
                      </Button>
                    </div>
                  </div>
                ))}
            </PageWrapper>
            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
              <BanMenu
                onClick={(data) => handleBanUser(`${id}`, data)}
                isLoading={isUpdateLoading}
              />
            </Modal>
          </div>
        )}
      </Wrapper>
    </div>
  );
};
