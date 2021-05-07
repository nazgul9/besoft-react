import React from 'react';
import Item from '../components/Item';
import './App.css'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { Route } from 'react-router-dom';
import Detail from '../components/Detail';

const App = () => {

    const Images = [
        {
            id: 1,
            image: "https://sun1.dataix-kz-akkol.userapi.com/impg/yZhx_-WfoPlr3mXQMaiFh03kSnczW1u2LqamZA/OhL_0AW3TG4.jpg?size=1280x854&quality=96&sign=5e8471c71ed012197a0a4ee72f35c4bf&type=album"
        },
        {
            id: 2,
            image: "https://sun2.dataix-kz-akkol.userapi.com/impg/AiGwkrma3C4jYf8FOH8Cq33pF_NU-u7jzYmj9w/s-SUmxksEI4.jpg?size=1280x720&quality=96&sign=08023a5f0d988b3a7e652ca0f62b3aca&type=album"
        },
        {
            id: 3,
            image: "https://sun1.dataix-kz-akkol.userapi.com/impg/qeqw4tnvBbVuo-eA6duptP1OJHsSTwvecb7AXA/uzHccxv2mLo.jpg?size=1280x853&quality=96&sign=fd36869d8e3731fda5ceaf506ac7e4e7&type=album"
        },
        {
            id: 4,
            image: "https://sun1.dataix-kz-akkol.userapi.com/impg/TXvcNBugm1blycndLB8g67kYqUdDOdhjgeQepg/O42VsFUVN2Y.jpg?size=1280x720&quality=96&sign=efc802a3ba92b1d219e7e5c7c9ac75c2&type=album"
        },
        {
            id: 5,
            image: "https://sun1.dataix-kz-akkol.userapi.com/impg/UObPcPwr3a98F2BcPJFspjSKgQ0v38cOK90IrQ/c_OknB_LzLE.jpg?size=1280x720&quality=96&sign=0013927eec99aaf33081ed868df2cfc2&type=album"
        },
        {
            id: 6,
            image: "https://sun1.dataix-kz-akkol.userapi.com/impg/hNKes6sH7MJzPVAy3abPiS1c0KCjOY5m-JEJvw/e1bKF5fZ8UU.jpg?size=1280x720&quality=96&sign=e4ec9fa562c58134f4285ae09032c79f&type=album"
        },
        {
            id: 7,
            image: "https://sun1.dataix-kz-akkol.userapi.com/impg/wJ6W2XRR-D1MI5z3d6PY4oBve1zroO0lseJNUA/IyrOKM9Kenw.jpg?size=1280x720&quality=96&sign=994d977219ccf0caec4ba8c23ef66348&type=album"
        },
        {
            id: 8,
            image: "https://sun2.dataix-kz-akkol.userapi.com/impg/wtHL-l8iZLKFoAlohbSLLBz73JjO9_JA1MNY0g/ydmi34_WCK4.jpg?size=1280x720&quality=96&sign=bf3c89b4b4e2e49606aac645ab2dc36f&type=album"
        },
        {
            id: 9,
            image: "https://sun2.dataix-kz-akkol.userapi.com/impg/4jyfBqzB-kiDy1THxTXH1HF78nmpuYHuQ7NOwA/J5DZGYPHEh4.jpg?size=1280x720&quality=96&sign=f71ce808302d7936f2ee3366275d2e2f&type=album"
        },
    ]


    return (
        <div className="container border shadow-sm">
            <div className="row">
                <Route path="/" exact>
                    {Images.map((item) => (
                        <Link to={`/img/${Images.id}`} className="col-4 m-0 p-0 img-nice">
                            <Item item = {item} key={Images.id}/>
                        </Link>
                    ))}
                </Route>
                <Route path="/img/:id">
                    <Detail />
                </Route>
            </div>
        </div>
    );
};


export default App;