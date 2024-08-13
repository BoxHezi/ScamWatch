import { domainCheck } from "../virustotal";

function Input({ suspiciousType, onDataReceived }) {
  return (
    <div>
      <input
        placeholder={suspiciousType}
        id={"suspicious" + suspiciousType}
      ></input>
      <button onClick={check}>Check</button>
    </div>
  );

  async function check() {
    const target = document.getElementById("suspicious" + suspiciousType);
    console.log(target)

    if (suspiciousType === "domain") {
      const data = await domainCheck(target.value);
      onDataReceived(data.data)
    } else if (suspiciousType === "number") {
      // TODO: check phone number
      console.log("Checking number");
    }
  }

  // function virusTotalCheck(url) {}
}

export default Input;
