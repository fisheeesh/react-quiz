/* eslint-disable react/prop-types */
export default function StartScreen({ numQuestions }) {
    return (
        <div className="start">
            <h2>Welcome to the React Quiz!</h2>
            <h3>{numQuestions} questions to test your React mastery</h3>
            <button className="btn btn-ui">Let&apos;s Start</button>
        </div>
    )
}
