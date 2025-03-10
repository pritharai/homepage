const Card = ({ children }) => (
    <div className="bg-white rounded-lg shadow-md p-6">{children}</div>
  );
  
  const CardContent = ({ children }) => <div>{children}</div>;
  
  export { Card, CardContent };
  