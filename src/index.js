import "./styles.css";
const BARS_CONTAINER = document.getElementById("bars");
const BUTTON = document.getElementById("start");
const state = {
  promise: Promise.resolve()
};

const onClickHandler = () => {
  const p = createLoader(state.promise);
  state.promise = p;
};

const createLoader = statePromise => {
  const container = document.createElement("div");
  container.classList.add("progress-container");
  const inner = document.createElement("div");
  inner.classList.add("progress");
  container.appendChild(inner);
  BARS_CONTAINER.appendChild(container);
  return statePromise.then(
    () =>
      new Promise(res => {
        inner.addEventListener("transitionend", res);
        setTimeout(() => {
          inner.classList.add("active");
        }, 0);
      })
  );
};

BUTTON.addEventListener("click", onClickHandler);
