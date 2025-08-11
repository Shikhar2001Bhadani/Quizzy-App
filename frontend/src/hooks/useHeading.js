import { useSelector } from "react-redux";
import { commonSelector } from "../store/features/common/selectors";
import { useDispatch } from "react-redux";
import { setCommonKey } from "../store/features/common/commonSlice";

export const useHeading = () => {
  const dispatch = useDispatch();
  const { heading, subheading } = useSelector(commonSelector);

  const setHeading = (value) => {
    dispatch(setCommonKey({ key: "heading", value }));
  };

  const setSubheading = (value) => {
    dispatch(setCommonKey({ key: "subheading", value }));
  };

  return { heading, subheading, setHeading, setSubheading };
};
