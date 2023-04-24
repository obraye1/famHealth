import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({ heading, children }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="h3" className="mb-3 text-yellow-800">
        {heading}
      </Typography>
      
    </div>
  );
}


PageTitle.propTypes = {
  heading: PropTypes.string.isRequired,
};

PageTitle.displayName = "/src/layouts/PageTitle.jsx";

export default PageTitle;