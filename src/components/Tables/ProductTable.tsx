
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";
import Image from "next/image";

const productDatas = [
  {
    id: "/images/brand/brand-01.svg",
    name: "Google",
    unitPrice: 3.5,
    quantity: "5,768",
   
  },
  {
    id: "/images/brand/brand-02.svg",
    name: "Twitter",
    unitPrice: 2.2,
    quantity: "4,635",
  },
  {
    id: "/images/brand/brand-03.svg",
    name: "Github",
    unitPrice: 2.1,
    quantity: "4,290",

  },
  {
    id: "/images/brand/brand-04.svg",
    name: "Vimeo",
    unitPrice: 1.5,
    quantity: "3,580",

  },
  {
    id: "/images/brand/brand-05.svg",
    name: "Facebook",
    unitPrice: 3.5,
    quantity: "6,768",
   
  },
];

const column = [
  {
    id: "product_title",
    label: "Product Name",
  },
  {
    id: "product_unit_price",
    label: "Unit Price",
  },
  {
    id: "product_quantity",
    label: "Quantity",
  },
  {
    id: "product_action",
    label: "Action",
  },
];
const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Stocked Product
      </h4>

      <Table aria-label="Example table with custom cells">
        <TableHeader columns={column}>
          {(column) => (
            <TableColumn
              key={column.id}
              align="center"
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={productDatas}>
          {productDatas.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.unitPrice}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                <div className="flex">
                  <Button isIconOnly variant="light">
                    <i className="pi pi-eye"></i>
                  </Button>
                  <Button isIconOnly variant="light">
                    <i className="pi pi-pencil"></i>
                  </Button>
                  <Button isIconOnly variant="light">
                    <i className="pi pi-trash"></i>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableOne;
