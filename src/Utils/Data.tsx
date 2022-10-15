import user from "../Assets/images/users.svg";
import guarantor from "../Assets/images/guarantor.svg";
import loan from "../Assets/images/loan.svg";
import decisionModels from "../Assets/images/decision model.svg";
import savings from "../Assets/images/saving.svg";
import loanRequests from "../Assets/images/loan request.svg";
import whitelist from "../Assets/images/whitelist.svg";
import karma from "../Assets/images/karma.svg";
import audit from "../Assets/images/audit log.svg";
import briefcase from "../Assets/images/briefcase organization.svg";
import loanProduct from "../Assets/images/loan product.svg";
import feesCharge from "../Assets/images/fees and charges.svg";
import feesPrice from "../Assets/images/fees and prices.svg";
import preference from "../Assets/images/preference.svg";
import report from "../Assets/images/reports.svg";
import settlement from "../Assets/images/settlement.svg";
import transaction from "../Assets/images/transaction.svg";
import service from "../Assets/images/services.svg";
import serviceAccount from "../Assets/images/service account.svg";
import savingProduct from "../Assets/images/saving product.svg";

export const links = [
  { id: 1, url: "/", text: "Docs" },
  { id: 2, url: "/", text: "Docs" },
];

export const customers = [
  {
    id: 1,
    value: "Users",
    icon: <img src={user} alt="icon" />,
  },
  {
    id: 2,
    value: "Guarantors",
    icon: <img src={guarantor} alt="icon" />,
  },
  {
    id: 3,
    value: "Loans",
    icon: <img src={loan} alt="icon" />,
  },
  {
    id: 4,
    value: "Decision Models",
    icon: <img src={decisionModels} alt="icon" />,
  },
  {
    id: 5,
    value: "Savings",
    icon: <img src={savings} alt="icon" />,
  },
  {
    id: 6,
    value: "Loan Requests",
    icon: <img src={loanRequests} alt="icon" />,
  },
  {
    id: 7,
    value: "Whitelist",
    icon: <img src={whitelist} alt="icon" />,
  },
  {
    id: 8,
    value: "Karma",
    icon: <img src={karma} alt="icon" />,
  },
];

export const business = [
  {
    id: 1,
    value: "Organization",
    icon: <img src={briefcase} alt="icon" />,
  },
  {
    id: 2,
    value: "Loan Products",
    icon: <img src={loanProduct} alt="icon" />,
  },
  {
    id: 3,
    value: "Saving Products",
    icon: <img src={savingProduct} alt="icon" />,
  },
  {
    id: 4,
    value: "Fees and Charges",
    icon: <img src={feesCharge} alt="icon" />,
  },
  {
    id: 5,
    value: "Transactions",
    icon: <img src={transaction} alt="icon" />,
  },
  {
    id: 6,
    value: "Services",
    icon: <img src={service} alt="icon" />,
  },
  {
    id: 7,
    value: "Service Account",
    icon: <img src={serviceAccount} alt="icon" />,
  },
  {
    id: 8,
    value: "Settlements",
    icon: <img src={settlement} alt="icon" />,
  },
  {
    id: 9,
    value: "Reports",
    icon: <img src={report} alt="icon" />,
  },
];

export const settings = [
  {
    id: 1,
    value: "Preferences",
    icon: <img src={preference} alt="icon" />,
  },
  {
    id: 2,
    value: "Fees and Pricing",
    icon: <img src={feesPrice} alt="icon" />,
  },
  {
    id: 3,
    value: "Audit Logs",
    icon: <img src={audit} alt="icon" />,
  },
];
