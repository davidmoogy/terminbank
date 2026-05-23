import "./num.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NumberSection(){

    const [stats, setStats] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/stats")
            .then((res) => {
                setStats(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return(
        <div className="numbers-container">

            <div className="card">
                <h2>ჩვენს შესახებ</h2>

                <p>
                    არნოლდ ჩიქობავას სახელობის ენათმეცნიერების ინსტიტუტი — სამეცნიერო კვლევითი ინსტიტუტი, რომელიც 1936წელს შექმნილი „აკად. ნ. მარის სახელობის ენის, ისტორიისა და მატერიალური კულტურის ინსტიტუტის“ (ენიმკი) ...
                </p>

                <button>მეტის ნახვა</button>
            </div>

            <div className="numbers-container1">

                <h1>რიხვითი მაჩვენებელი</h1>

                <div className="stats-section">

                    {stats.map((item) => (
                        <div className="stat-card" key={item.id}>

                            <div className="img-label">
                                <img src={item.icon} alt="" />
                                <h2>{item.number}</h2>
                            </div>

                            <p>{item.title}</p>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}