import React from 'react';

const checkUserAuthentication = () => {
  return { auth: null }; // change null to { isAdmin: true } for test it.
}

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.getInitialProps = async (context) => {
    const userAuth = checkUserAuthentication()
    if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({ ...context, auth: userAuth })
      return { ...wrappedProps, userAuth }
    }
    return { userAuth }
  }

  return hocComponent
}
