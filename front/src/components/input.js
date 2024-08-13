import { domainCheck } from "../virustotal";

function Input({ suspiciousType }) {
  return (
    <div>
      <input
        placeholder={suspiciousType}
        id={"suspicious" + suspiciousType}
      ></input>
      <button onClick={check}>Check</button>
    </div>
  );

  function check() {
    const target = document.getElementById("suspicious" + suspiciousType);
    console.log(target)

    if (suspiciousType === "domain") {
      // TODO: virustotal checking url
      const data = domainCheck(target.value);
    } else if (suspiciousType === "number") {
      // TODO: check phone number
      console.log("Checking number");
    }
  }

  function virusTotalCheck(url) {}
}

export default Input;
