import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-44 h-44 rounded-full overflow-hidden">
        <Image
          src="/neymar.jpg"
          alt="face"
          width={200}
          height={200}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h1 className="text-xl sm:text-3xl font-bold mt-5 tracking-tighter">
        👋vin🚀
      </h1>
      <p className="text-center w-full max-w-md mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati autem ab atque voluptate qui suscipit, excepturi iusto, reprehenderit molestias non alias fugiat quasi nisi id veritatis iure neque distinctio quia illo tempore officiis dicta odio? Doloribus provident odio laborum facilis consectetur libero unde ipsam iste itaque vel? Perspiciatis voluptatem velit dolore id minima nihil blanditiis voluptatum. Illum odio eos quaerat nulla doloremque totam in unde eligendi, beatae ullam nam, cum quibusdam voluptatibus maiores. Numquam, aperiam? Eius illo a et quo optio at necessitatibus nostrum enim? Quos, consequatur delectus. Tempore placeat quibusdam officiis ea accusantium velit et. Esse impedit commodi numquam.
      </p>
    </div>
  );
}