import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "./redux/addReducer";
import { clear, show } from "./redux/clearReducer";
import { div } from "./redux/divReducer";
import { mul } from "./redux/mulReducer";
import { sub } from "./redux/subReducer";

function Home(props) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!num1 || !num2 || !operator) {
      alert("All fields are required");
      return;
    }

    setIsSubmitted(true);
    props.show();

    switch (operator) {
      case "+":
        props.add(num1, num2);
        break;
      case "-":
        props.sub(num1, num2);
        break;
      case "*":
        props.mul(num1, num2);
        break;
      case "/":
        props.div(num1, num2);
        break;
      default:
        alert("Invalid Opertion");
        break;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Num 1:</label>
              </td>
              <td>
                <input
                  type="number"
                  value={num1}
                  onChange={(event) => {
                    setNum1(event.target.value);
                    setIsSubmitted(false);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Num 2</label>
              </td>
              <td>
                <input
                  type="number"
                  value={num2}
                  onChange={(event) => {
                    setNum2(event.target.value);
                    setIsSubmitted(false);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Operator</label>
              </td>
              <td>
                <input
                  type="text"
                  value={operator}
                  onChange={(event) => {
                    setOperator(event.target.value);
                    setIsSubmitted(false);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" />
              </td>
              <td>
                <input
                  type="button"
                  value="Clear"
                  onClick={() => {
                    props.clear();
                    setNum1("");
                    setNum2("");
                    setOperator("");
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {!props.clearStatus && (
        <>
          {operator === "+" && isSubmitted && <p>Result: {props.addResult}</p>}
          {operator === "-" && isSubmitted && <p>Result: {props.subResult}</p>}
          {operator === "*" && isSubmitted && <p>Result: {props.mulResult}</p>}
          {operator === "/" && isSubmitted && <p>Result: {props.divResult}</p>}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    addResult: state.add.result,
    subResult: state.sub.result,
    mulResult: state.mul.result,
    divResult: state.div.result,
    clearStatus: state.clear.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (num1, num2) => dispatch(add(num1, num2)),
    sub: (num1, num2) => dispatch(sub(num1, num2)),
    mul: (num1, num2) => dispatch(mul(num1, num2)),
    div: (num1, num2) => dispatch(div(num1, num2)),
    clear: (num1, num2) => dispatch(clear()),
    show: (num1, num2) => dispatch(show()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home
