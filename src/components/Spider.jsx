import spiderImg from '../assets/img/spider.png';

const Spider = () => (
    <div className='spider'>
        <div className='string'></div>
        <img src={spiderImg} alt="Spider" style={{ height: '100px', opacity: 0.5 }} />
    </div>
);

export default Spider;
