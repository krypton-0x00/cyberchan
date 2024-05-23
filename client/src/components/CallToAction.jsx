import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">PJPT</h2>
        <p className="text-gray-500 my-2">
          PJPT CERT usually refers to a certification or assessment related to
          penetration testing and vulnerability assessment, which involves
          testing systems and networks for weaknesses that could be exploited by
          attackers.{" "}
        </p>
      </div>
      <div className="p-7 flex-1">
        <img src="https://i.imgur.com/BEfn76p.jpeg://imgur.com/a/YpLrQuD" />
      </div>
    </div>
  );
}
