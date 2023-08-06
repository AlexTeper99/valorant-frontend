export const ValorantLoadingLogo = (props: any) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 48 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <style>
      {`
        .fade {
          animation: fade 2s infinite;
        }
        @keyframes fade {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}
    </style>
    <path
      d="M0 19.8347V0L31.9451 40H15.9726L0 19.8347Z"
      fill="white"
      className="fade"
    />
    <path
      d="M42.6484 26.6116H27.0051L48 0V19.8347L42.6484 26.6116Z"
      fill="white"
      className="fade"
    />
  </svg>
);
