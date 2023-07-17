import { Button, Popover } from "@mantine/core";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ILog {
  log: boolean;
  setLog: React.Dispatch<React.SetStateAction<boolean>>;
}

function ActivityLog({ log, setLog }: ILog) {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const token = JSON.parse(localStorage.getItem("my-user") as string);
    axios({
      url: "https://web-production-9c5b.up.railway.app/api/card/activity_log/",
      method: "get",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then(function ({ data }) {
        setData(data.results);
      })
      .catch(function (error) {});
  };
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <Popover width={390} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Image
          className=" cursor-pointer"
          src={"/shared/notification.svg"}
          alt="notification"
          width={30}
          height={30}
          onClick={() => setLog(true)}
        />
      </Popover.Target>
      <Popover.Dropdown>
        {/* activity log details */}
        <section className=" overflow-auto h-[500px] scroll">
          <h3 className=" text-[#18181B] text-base font-semibold mb-3">
            Activity Log
          </h3>
          {data.map((item, index) => (
            <div key={index} className=" flex flex-col gap2 py-2 pb-3">
              <div className=" flex justify-between items-center gap-2">
                <div className=" flex items-center">
                  <div className="bg-[#FCF3E8] w-8 h-8 flex justify-center items-center">
                    <Image
                      src="/edit-log.svg"
                      width={16}
                      height={16}
                      alt="icon"
                    />
                  </div>
                  <div className=" flex flex-col gap-2">
                    <p className=" text-sm">{item.data}</p>
                    <p className=" text-[10px] text-[#5E606A]">
                      By <span className=" underline">{item.actor}</span>
                    </p>
                  </div>
                </div>
                <p className=" text-[10px] text-[#8F9198]">{item.time_since}</p>
              </div>

              <div className=" h-[1px] bg-[#F0F0F1]"></div>
            </div>
          ))}
        </section>
      </Popover.Dropdown>
    </Popover>
  );
}
export default ActivityLog;
