import { createGenerateClassName, StylesProvider } from "@mui/styles";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";

const generateClassName = createGenerateClassName({
    productionPrefix: "prod"
});

const App: React.FC = () => {
    return (
        <Router>
            <StylesProvider generateClassName={generateClassName}>
                <Routes />
            </StylesProvider>
        </Router>
    );
};

export default App;
