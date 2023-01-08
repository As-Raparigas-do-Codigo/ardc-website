import Constants from 'constants';

const FeatureFlag = ({ name, children }) => {
  const feature = Constants.FeatureFlags.find((feature) => feature.name === name);

  if (feature && feature.displayChildren === true) {
    return children;
  }

  return null;
};

export default FeatureFlag;
