import ReduxProvider from "./redux-provider";

const withRedux = (Component) => {
    return function WrappedComponent(props) {
        return (
            <ReduxProvider>
                <Component {...props} />
            </ReduxProvider>
        );
    };
}

export default withRedux;