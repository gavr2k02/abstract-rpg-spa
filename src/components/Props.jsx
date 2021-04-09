import React from "react";
import { connect } from "react-redux";

import { Bar } from "@reactchartjs/react-chart.js";

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const Props = ({ personage }) => {
    const data = {
        labels: ["Жизненная сила", "Уклонение", "Энергичность"],
        datasets: [
            {
                label: "Очки",
                data: [
                    personage.characteristic.lifeForce,
                    personage.characteristic.evasion,
                    personage.characteristic.energy,
                ],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className='component bgblack'>
            <div className='container text'>
                <h2>Характеристика</h2>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        personage: state.personage,
    };
};

export default connect(mapStateToProps)(Props);
