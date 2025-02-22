import { ReactNode } from "react";

type MainProps = {
    children: ReactNode;
};

export default function Main({ children }: MainProps) {
    return (
        <div className="main">
            {children}
        </div>
    );
}