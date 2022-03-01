import { EyeOffOutline, EyeOutline } from "react-ionicons";
import { useState } from "react";
const App = () => {
    const password = "ChromeIsGolden2022";
    const maskedPassword = password.replace(/./g, "·");

    const [hidden, setHidden] = useState(true);

    const onClick = () => setHidden(!hidden);

    return (
        <main className="h-screen w-screen grid place-items-center">
            <div className="max-w-lg">
                <div className="rounded-md cursor-pointer transition-all hover:-translate-y-2 hover:shadow-lg border p-6">
                    <h1 className="text-2xl font-semibold flex items-center">
                        <img src="/src/favicon-32x32.png" className="mr-2" />
                        Del Oro Wifi Password
                    </h1>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-gray-700 font-mono">{hidden ? maskedPassword : password}</p>
                        <span onClick={onClick}>{hidden ? <EyeOffOutline /> : <EyeOutline />}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4 rounded-md border p-6">
                    <div className="h-3 w-3 bg-green-500 rounded-full border-2 border-green-300"></div>
                    <p className="text-gray-700">Updated 03.01.2022</p>
                </div>
            </div>
        </main>
    );
};

export default App;
