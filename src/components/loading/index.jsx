import { LoadingStyle } from "./styles";

export function Loading() {
  return (
    <div>
      <LoadingStyle>
        <div className="body">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="hand">
            <span></span>
            <div className="face"></div>
            <div className="cowl"></div>
          </div>
        </div>
        <div className="speed">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1>LOADING</h1>
      </LoadingStyle>
    </div>
  );
}
