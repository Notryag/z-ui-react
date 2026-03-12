import './index.less';

type StatusScope = [number, string][];

const sortArr = (arr: StatusScope) => arr.sort((a, b) => a[0] - b[0]);

function checkStatus(scope: StatusScope, val: number, defaultColor: string) {
  val = +val;
  sortArr(scope);

  if (scope.length === 1) {
    return val < scope[0][0] ? scope[0][1] : defaultColor;
  } else if (scope.length === 2) {
    return val < scope[0][0]
      ? scope[0][1]
      : scope[0][0] < val && val < scope[1][0]
        ? scope[1][1]
        : defaultColor;
  } else if (scope.length === 3) {
    return val < scope[0][0]
      ? scope[0][1]
      : scope[0][0] < val && val < scope[1][0]
        ? scope[1][1]
        : scope[1][0] < val && val < scope[2][0]
          ? scope[2][1]
          : defaultColor;
  }
}

interface BaseProps {
  themeColor?: string;
  percent?: number;
  autoHidden?: boolean;
  textAlign?: string;
  hiddenText?: boolean;
  width?: number | string;
  statusScope?: StatusScope;
  textColor?: string;
}

function Progress(props: BaseProps) {
  const {
    themeColor = '#06f',
    percent = 0,
    autoHidden = false,
    hiddenText = false,
    width = 320,
    textColor = '#666',
    statusScope,
  } = props;

  return +percent === 100 && autoHidden ? null : (
    <div className="progressWrap">
      <div
        className="progressBar"
        style={{ width: typeof width === 'number' ? `${width}px` : width }}
      >
        <div
          className="progressInnerBar"
          style={{
            width: `${percent}%`,
            backgroundColor:
              statusScope && statusScope.length
                ? checkStatus(statusScope, percent, themeColor)
                : themeColor,
          }}
        ></div>
      </div>
      {!hiddenText && (
        <span className="progressText" style={{ color: textColor }}>
          {percent + '%'}
        </span>
      )}
    </div>
  );
}

export default Progress;
