import { Table } from "@mantine/core";
import Image from "next/image";
import { data } from "./data";
import clsx from "clsx";

export function TableData() {
  const tableHead = (
    <tr>
      <th className="flex justify-center">Card</th>
      <th>Xpert Name</th>
      <th>Email Address</th>
      <th>Designation</th>
      <th>Status</th>
    </tr>
  );

  const rows = data.map((item) => (
    <tr key={item.id}>
      <td className="flex justify-center ">
        <div className=" flex justify-center">
        <Image src={item.card} width={24} height={14.24} alt="cards" style={{
          width: item.width,
          height: item.height
        }}/>

        </div>
      </td>
      <td>{item.xpert}</td>
      <td>{item.email}</td>
      <td>{item.designation}</td>
      <td className={clsx(" flex items-center")}>
        {item.status === "Active" ? (
          <div className="bg-[#E7F9F0] flex justify-between items-center p-2 rounded-lg gap-1">
            {/* circled dot */}
            <div className=" bg-[#0DBF66] w-2 h-2 rounded-full"></div>
            <span className=" text-[#076D3A]">{item.status}</span>
          </div>
        ) : (
          <div className="bg-[#FDEEEE] flex justify-between items-center p-2 rounded-lg gap-1">
            <div className=" bg-[#ED5556] w-2 h-2 rounded-full  "></div>
            <span className=" text-[#873031]">{item.status}</span>
          </div>
        )}
      </td>
    </tr>
  ));

  return (
    <div className=" bg-white max-w-[1440px]">
      <Table className=" w-[90%] mx-auto">
        <thead>{tableHead}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}
