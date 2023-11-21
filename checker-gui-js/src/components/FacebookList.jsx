import FacebookInfo from "./FacebookInfo/FacebookInfo.jsx";

function FacebookList({accs}) {
    return (
        <div>
            {accs.map((acc, index) =>
                <FacebookInfo key={index} acc={acc}/>
            )}
        </div>
    )
}

export default FacebookList;