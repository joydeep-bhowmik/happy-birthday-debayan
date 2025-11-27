

const IntroSection = ({ onStart }) => (
    <div id="intro">
        <p>This birthday celebration is not for the faint of heart. Do you dare to continue?</p>
        <button className="btn" style={{ margin: 'auto' }} onClick={onStart}>Enter If You Dare</button>
    </div>
);

export default IntroSection;