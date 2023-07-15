import { Checkbox, Table } from "@mantine/core";
import Image from "next/image";
import { data } from "./data";
import clsx from "clsx";

export interface IXperts {
  address: string;
  city: string;
  country: string;
  created_date: string;
  card_type: string;
  email: string;
  first_name: string;
  full_name: string;
  last_name: string;
  middle_name: string;
  phone_number: string;
  profile_picture: string;
  qr_code: string;
  retrieve_update_delete_url: string;
  role: string;
  tribe: string;
  is_active: boolean;
  id: number
}


export function TableData({ xperts }: { xperts: IXperts[] }) {
  const tableHead = (
    <tr>
      <th className="flex justify-center">Card</th>
      <th>Xpert Name</th>
      <th>Email Address</th>
      <th>Designation</th>
      <th>Status</th>
    </tr>
  );

  const rows = xperts?.map((item, index) => (
    <tr key={index}>

      <td className="flex justify-center ">
          <img
            src={item.card_type === 'portraita1' ? '/create-card/portraita1.png'  : item.card_type ==='portraita2'? '/create-card/portraita2.png': item.card_type === 'landscapa1' ?'/create-card/landscapea1.png': '/create-card/landscapea2.png' }
            width={24}
            height={14.24}
            alt="cards"
            style={{
              width: "13.71px",
              height: "24px",
            }}
          />
        </td>
      <td>{item.full_name}</td>
      <td>{item.email}</td>
      <td>{item.role.toLowerCase()}</td>
      <td className={clsx(" flex items-center")}>
        {item.is_active ? (
          <div className="bg-[#E7F9F0] flex justify-between items-center p-2 rounded-lg gap-1">
            <div className=" bg-[#0DBF66] w-2 h-2 rounded-full"></div>
            <span className=" text-[#076D3A]">{item.is_active}Active</span>
          </div>
        ) : (
          <div className="bg-[#FDEEEE] flex justify-between items-center p-2 rounded-lg gap-1">
            <div className=" bg-[#ED5556] w-2 h-2 rounded-full  "></div>
            <span className=" text-[#873031]">{item.is_active}Inactive</span>
          </div>
        )}
      </td>
    </tr>
  ));

  return (
    <div className=" bg-white max-w-[1440px] flex-1 ">
      <Table className=" w-[90%] mx-auto">
        <thead>{tableHead}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}
