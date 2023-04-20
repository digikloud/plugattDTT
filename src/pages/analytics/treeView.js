import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import "../../App.css";
import { useDispatch } from "react-redux";
import { setAnalyticsselectedItem } from "../../redux/dashboardslice";

function FileSystemNavigator() {
  const details = [
    {
      id: 1,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 940,
      totalNodes: 6,
      // value: 34,
      mockdata1 : {
        timestamp: [12, 22, 21, 21, 22],
        value: [18, 36, 20, 32, 11],
      }
    },
    {
      id: 2,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 270,
      totalNodes: 3,
      value: 4,
      mockdata1 : {
        timestamp: [29, 42, 12, 13, 19],
        value: [98, 56, 123, 73, 61],
      }
    },
    {
      id: 3,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 200,
      totalNodes: 1,
      value: 4,
      mockdata1 : {
        timestamp: [12, 22, 21, 21, 22],
        value: [18, 36, 20, 32, 11],
      }
    },
    {
      id: 4,
      totalCities: 2,
      totalZones: 0,
      totalVoltage: 50,
      totalNodes: 1,
      value: 34,
      mockdata1 : {
        timestamp: [12, 22, 21, 21, 22],
        value: [18, 36, 20, 32, 11],
      }
    },
    {
      id: 5,
      totalCities: 2,
      totalZones: 0,
      totalVoltage: 20,
      totalNodes: 1,
      value: 4,
      mockdata1 : {
        timestamp: [54, 35, 11, 26, 18],
        value: [76, 49, 65, 14, 43],
      }
    },
    {
      id: 6,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 670,
      totalNodes: 3,
      value: 4,
      mockdata1 : {
        timestamp: [12, 22, 21, 21, 22],
        value: [18, 36, 20, 32, 11],
      }
    },
    {
      id: 7,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 150,
      totalNodes: 3,
      value: 4,
      mockdata1 : {
        timestamp: [12, 22, 21, 21, 22],
        value: [18, 36, 20, 32, 11],
      }
    },
    {
      id: 8,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 220,
      totalNodes: 1,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
    {
      id: 9,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 300,
      totalNodes: 1,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
    {
      id: 10,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 744,
      totalNodes: 6,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
    {
      id: 11,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 90,
      totalNodes: 3,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
    {
      id: 12,
      totalCities: 2,
      totalZones: 20,
      totalVoltage: 50,
      totalNodes: 10,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
    {
      id: 13,
      totalCities: 2,
      totalZones: 20,
      totalVoltage: 25,
      totalNodes: 10,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
    {
      id: 14,
      totalCities: 2,
      totalZones: 20,
      totalVoltage: 15,
      totalNodes: 10,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
    {
      id: 15,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 654,
      totalNodes: 3,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
    {
      id: 15,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 6,
      totalNodes: 3,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
    {
      id: 16,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 500,
      totalNodes: 3,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
    {
      id: 17,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 98,
      totalNodes: 3,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
    {
      id: 18,
      totalCities: 2,
      totalZones: 2,
      totalVoltage: 56,
      totalNodes: 3,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
  ];

  const treeViewdata = [
    {
      id: "Bogotá",
      nodeId: 1,
      children: [
        {
          id: "Chapinero",
          nodeId: 2,
          children: [
            {
              id: "1",
              nodeId: 3,
            },
            {
              id: "2",
              nodeId: 4,
            },
            {
              id: "3",
              nodeId: 5,
            },
          ],
        },
        {
          id: "Usaquen",
          nodeId: 6,
          children: [
            {
              id: "20",
              nodeId: 7,
            },
            {
              id: "21",
              nodeId: 8,
            },
            {
              id: "22",
              nodeId: 9,
            },
          ],
        },
      ],
    },
    {
      id: "Cali",
      nodeId: 10,
      children: [
        {
          id: "Aguacatal",
          nodeId: 11,
          children: [
            {
              id: "120",
              nodeId: 12,
            },
            {
              id: "110",
              nodeId: 13,
            },
            {
              id: "150",
              nodeId: 14,
            },
          ],
        },
        {
          id: "Rural",
          nodeId: 15,
          children: [
            {
              id: "40",
              nodeId: 16,
            },
            {
              id: "45",
              nodeId:17,
            },
            {
              id: "55",
              nodeId: 18,
            },
          ],
        },
      ],
    },
  ];

  // const detail1 = [
  //   {
  //     id : 1 ,
  //     nodeId : 1 ,
  //     name : "Bogoto"
  //   }
  // ]
  const dispatch = useDispatch();

  const handleclicktree = (data) => {
    const selected = details.find((detail) => detail.id === data.nodeId);
    console.log(selected);
    dispatch(setAnalyticsselectedItem(selected ?? {}));
  };

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={
        <LocationCityOutlinedIcon
          style={{ color: "#1db8b4", fontSize: "18px" }}
        />
      }
      defaultExpandIcon={
        <LocationCityOutlinedIcon
          style={{ color: "#1db8b4", fontSize: "21px" }}
        />
      }
      sx={{
        // height: 340,
        width: 200,
        overflowY: "auto",
      }}
    >
      <ITreeView data={treeViewdata} handleclicktree={handleclicktree} />
    </TreeView>
  );
}
export default FileSystemNavigator;

function ITreeView({ data, handleclicktree }) {
  return (
    <>
      {data?.map((data1) =>
        !data1.children ? (
          <TreeItem
            key={data1.nodeId}
            nodeId={data1.nodeId}
            label={data1.id}
            onClick={() => handleclicktree(data1)}
          />
        ) : (
          <TreeItem
            key={data1.nodeId}
            nodeId={data1.nodeId}
            label={data1.id}
            id="treeview_title"
            onClick={() => handleclicktree(data1)}
          >
            <ITreeView
              data={data1.children}
              handleclicktree={handleclicktree}
            />
          </TreeItem>
        )
      )}
    </>
  );
}
