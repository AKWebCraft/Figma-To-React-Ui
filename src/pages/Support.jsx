import supportImg from "../assets/support.png";
import check from "../assets/check.png";

const Support = () => {
  return (
    <div>
      <div className="w-[500px] ml-[90px]">
        <h1 className="font-bold text-xl mb-3">SUPPORT</h1>
        <p>
          We are on the list of companies with income tax benefits.
          <br />
          <br /> We collect donations in accordance with the good practice of
          collecting donations .
        </p>
        <img
          src={supportImg}
          className="w-[159px] h-[159px]"
          alt="supportImg"
        />
      </div>
      <div className="w-[500px] ml-[90px]">
        <h1 className="font-bold text-2xl text-bold mt-3 mb-1">
          One-time donation
        </h1>
        <p>
          <b>DONATION NUMBER</b> <br /> 900 9000 (call cost 7 €) <br />
          <br /> NB! Please be sure to listen until the end of the call,
          otherwise your help will not reach us. Thank you! <br />
          <br /> <b>BANK ACCOUNT </b> <br /> CAT SHELTER EE902200221030xxxxx
          (Swedbank)
        </p>
      </div>
      <div className="w-[500px] mt-10 ml-[90px]">
        <h1 className="font-bold mb-8">Permanent donation</h1>
        <p>
          Payee CAT SHELTER Account (Swedbank)
          <br />
          EE58220022103xxxxxx
          <br /> Explanation NGO Kassiabi permanent donation
          <br />
        </p>
        <ul>
          <li className="flex">
            <img src={check} className="w-[17px] h-[17px] mr-2" alt="check" />
            5€
          </li>
          <li className="flex">
            <img src={check} className="w-[17px] h-[17px] mr-2" alt="check" />
            10€
          </li>
          <li className="flex">
            <img src={check} className="w-[17px] h-[17px] mr-2" alt="check" />
            15€
          </li>
          <li className="flex">
            <img src={check} className="w-[17px] h-[17px] mr-2" alt="check" />
            25€
          </li>
        </ul>
        <p>
          Other amount
          <br />
          To enter into a standing order, click on the logo of the respective
          bank swedbank
          <br />
          If you want to help us in any other way, please call 55571625 or write
          to us at info@kassiabi.ee
        </p>
      </div>
    </div>
  );
};

export default Support;
