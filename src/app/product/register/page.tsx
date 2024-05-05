import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import React from "react";

function RegisterProduct() {
  return (
    <div className="min-h-dvh">
      <Card>
        <CardHeader>
            <h2 className="text-3xl font-bold py-10 px-15">Register New Product</h2>
        </CardHeader>
        <CardBody className="py-7 ">
          <form action="">
            <div className="grid gap-5 lg:grid-cols-2 font-semibold !px-10">
              <Input type="text" label="product name" variant="bordered" isRequired />
              <Input type="number" label="quantity" variant="bordered" isRequired />
              <Input
                type="text"
                label="unit price"
                variant="bordered"
                isRequired
                startContent={<p className="font-bold">NGN</p>}
              />
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default RegisterProduct;
