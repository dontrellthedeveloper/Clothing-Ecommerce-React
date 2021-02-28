import React from "react";

const ShowPaymentInfo = ({ order }) => (
    <div>
        <p>
            <span><b>Order Id:</b> {order.paymentIntent.id}</span>


            <br/>
            {/*{" / "}*/}
            {/*<span>Currency: {order.paymentIntent.currency.toUpperCase()}</span>*/}
            {/*{" / "}*/}
            {/*<span>Method: {order.paymentIntent.payment_method_types[0]}</span>*/}
            {/*{" / "}*/}
            <span>Payment: {order.paymentIntent.status.toUpperCase()}</span>
            {" / "}
            <span>
        Orderd on:{"  "}
                {new Date(order.paymentIntent.created * 1000).toLocaleString()}
      </span>
            <br/>

            {/*{" / "}*/}
            <span>
        <b>Amount:{" "}
                {(order.paymentIntent.amount /= 10).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}</b>
      </span>

            <br/>
            <span className="badge bg-primary text-white">
            STATUS: {order.orderStatus}
            </span>
            {/*{" / "}*/}


        </p>
    </div>
);

export default ShowPaymentInfo;
