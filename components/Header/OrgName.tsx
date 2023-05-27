interface OrgNameProps {
  orgName: string;
  orgSub?: string;
}

const OrgName: React.FC<OrgNameProps> = ({ orgName, orgSub }) => {
  return (
    <div className="flex flex-col mt-3 ml-5 space-y-2">
      <h1 className="text-xl font-semibold tracking-wider text-white">
        {orgName}
      </h1>
      <h3 className="text-sm text-white">{orgSub}</h3>
    </div>
  );
};

export default OrgName;
