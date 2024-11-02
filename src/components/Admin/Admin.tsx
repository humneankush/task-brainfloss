import React from "react";
import { Bar } from "react-chartjs-2";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

const Admin: React.FC = () => {
  const totalCollection = 10000;
  const totalCustomers = 250;

  const salesData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales Report",
        data: [2000, 3000, 1500, 4000, 2500],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 10 }}>Sales Report</Text>
        <Text>Total Collection: ${totalCollection}</Text>
        <Text>Total Customers: {totalCustomers}</Text>
      </Page>
    </Document>
  );

  return (
    <div className="dashboard">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Total Collection</h5>
              <p>${totalCollection}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Total Customers</h5>
              <p>{totalCustomers}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Sales Report</h5>
              <Bar data={salesData} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <PDFDownloadLink document={<MyDocument />} fileName="sales_report.pdf">
          {/* {
            loading ? "Loading document..." : "Download PDF"
          } */}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Admin;
