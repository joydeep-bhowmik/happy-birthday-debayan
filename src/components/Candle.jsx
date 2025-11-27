const Candle = ({ index, lit }) => (
    <div className={`candle ${lit ? 'lit' : ''}`}>
        <div className="flame"></div>
    </div>
);
export default Candle;