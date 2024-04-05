import Image from "next/image";
import background from "@/assets/images/bg.jpg";
import portrait from "@/assets/images/portrait.png";
import GallerySmall from "@/components/gallery-small/GallerySmall";
import PostsHero from "@/components/post/PostsHero";

export default function Home() {
  return (
    <>
      <section
        className="main-block"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="main-block__hidden"></div>
        <div className="main-block__wrapper">
          <div className="main-block__subheader">
            САЙТ УЧИТЕЛЯ ФИЗИЧЕСКОЙ КУЛЬТУРЫ
          </div>
          <div className="main-block__header">
            АЛЕКСАНДРА
            <br />
            ВИТАЛЬЕВИЧА
            <br />
            СОРОКИНА
          </div>
        </div>
      </section>
      {/*      <section className="welcome-block">
        <div className="welcome">
          <div className="welcome__col">
            <div className="welcome__title">
              Здравствуйте, уважаемые коллеги, родители, учащиеся и гости сайта
            </div>
            <div className="welcome__text">
              Мой сайт может быть полезен учителям физической культуры,
              родителям и ученикам. Я очень рад, что вы нашли немного времени и
              зашли на мой сайт.
            </div>
          </div>
          <div className="welcome__col">
            <Image src={portrait} alt="portrait"></Image>
          </div>
        </div>
      </section>*/}
      <section className="flex flex-col justify-center items-center mb-10">
        <h2 className="font-bold text-3xl text-center mt-10 mb-2 text-[#172e50]">
          Последние события
        </h2>
        <PostsHero />
      </section>
      <section className="gallery-block">
        <GallerySmall />
      </section>
    </>
  );
}
