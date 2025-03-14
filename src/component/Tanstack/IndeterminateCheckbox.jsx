import { useEffect, useRef } from "react";

const IndeterminateCheckbox = ({ indeterminate, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return <input type="checkbox" ref={ref} {...rest} id="checkbox" />;
};

export default IndeterminateCheckbox;
