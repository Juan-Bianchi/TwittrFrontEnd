export enum IconType {
  LOGO = "logo",
  HOME = "home",
  ACTIVE_HOME = "active_home",
  EXPLORE = "explore",
  ACTIVE_EXPLORE = "active_explorer",
  MESSAGE = "message",
  ACTIVE_MESSAGE = "active_message",
  PROFILE = "profile",
  ACTIVE_PROFILE = "active_profile",
  BACK_ARROW = "backArrow",
  CANCEL = "cancel",
  CHAT = "chat",
  DISPLAY = "display",
  IMAGE = "image",
  RETWEET = "retweet",
  LIKE = "like",
  SETTINGS = "settings",
  DELETE = "delete",
  ALERT = "alert",
}

interface IconProps {
  width?: string;
  height?: string;
  color?: string;
  onClick?: () => void;
  active?: boolean;
}
export const Icon = (props: IconProps) => {
  return {
    [IconType.HOME]: <HomeIcon {...props} />,
    [IconType.ACTIVE_HOME]: <ActiveHomeIcon {...props} />,
    [IconType.MESSAGE]: <MessageIcon {...props} />,
    [IconType.ACTIVE_MESSAGE]: <ActiveMessageIcon {...props} />,
    [IconType.PROFILE]: <ProfileIcon {...props} />,
    [IconType.ACTIVE_PROFILE]: <ActiveProfileIcon {...props} />,
    [IconType.EXPLORE]: <ExploreIcon {...props} />,
    [IconType.ACTIVE_EXPLORE]: <ActiveExploreIcon {...props} />,
    [IconType.LOGO]: <LogoIcon {...props} />,
    [IconType.BACK_ARROW]: <BackArrowIcon {...props} />,
    [IconType.CANCEL]: <CancelIcon {...props} />,
    [IconType.CHAT]: <ChatIcon {...props} />,
    [IconType.DISPLAY]: <DisplayIcon {...props} />,
    [IconType.IMAGE]: <ImageIcon {...props} />,
    [IconType.RETWEET]: <RetweetIcon {...props} />,
    [IconType.LIKE]: <LikeIcon {...props} />, // Update the key here
    [IconType.SETTINGS]: <SettingsIcon {...props} />,
    [IconType.DELETE]: <DeleteIcon {...props} />,
    [IconType.ALERT]: <AlertIcon {...props} />,
  };
};

export const LogoIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 248 204"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <path
        fill={props.color ? props.color : "#1d9bf0"}
        d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
      />
    </svg>
  );
};

export const HomeIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Home, Style=Style13">
        <path
          id="Vector"
          d="M12 6.69L17 11.19V19H15V13H9V19H7V11.19L12 6.69ZM12 4L2 13H5V21H11V15H13V21H19V13H22L12 4Z"
          fill={props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const ActiveHomeIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="home">
        <path
          id="Vector"
          d="M10.0001 17.4167V12.8333H14.0001V17.4167C14.0001 17.9208 14.4501 18.3333 15.0001 18.3333H18.0001C18.5501 18.3333 19.0001 17.9208 19.0001 17.4167V11H20.7001C21.1601 11 21.3801 10.4775 21.0301 10.2025L12.6701 3.3C12.2901 2.98834 11.7101 2.98834 11.3301 3.3L2.9701 10.2025C2.6301 10.4775 2.8401 11 3.3001 11H5.0001V17.4167C5.0001 17.9208 5.4501 18.3333 6.0001 18.3333H9.0001C9.5501 18.3333 10.0001 17.9208 10.0001 17.4167Z"
          fill={props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const ExploreIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Explore, Style=Style15">
        <path
          id="Vector"
          d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
          fill={props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const ActiveExploreIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Explore Hover, Style=Style16">
        <path
          id="Vector"
          d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM8.74484 9.5C6.25484 9.5 8.74484 13.99 8.74484 11.5C8.74484 9.01 10.7548 12 13.2448 12C15.7348 12 14 7.01 14 9.5C14 11.99 11.2348 9.5 8.74484 9.5Z"
          fill={props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const MessageIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Message">
        <path
          id="Vector"
          d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19 18H5C4.45 18 4 17.55 4 17V8L10.94 12.34C11.59 12.75 12.41 12.75 13.06 12.34L20 8V17C20 17.55 19.55 18 19 18ZM12 11L4 6H20L12 11Z"
          fill={props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const ActiveMessageIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Message Hover, Style=Style12">
        <path
          id="Vector"
          d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z"
          fill={props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const ProfileIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Profile">
        <path
          id="Vector"
          d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z"
          fill={props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const ActiveProfileIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Profile Hover, Style=Style14">
        <path
          id="Vector"
          opacity="0.3"
          d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"
          fill={props.color ? props.color : "black"}
        />
        <path
          id="Vector_2"
          opacity="0.3"
          d="M12 15C9.3 15 6.2 16.29 6 17.01V18H18V17C17.8 16.29 14.7 15 12 15Z"
          fill={props.color ? props.color : "black"}
        />
        <path
          id="Vector_3"
          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z"
          fill={props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const BackArrowIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=BackArrow">
        <path
          id="Vector"
          d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
          fill={props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const CancelIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Cancel">
        <path
          id="Vector"
          d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.10997 5.7C6.71997 5.31 6.08997 5.31 5.69997 5.7C5.30997 6.09 5.30997 6.72 5.69997 7.11L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z"
          fill={props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const ChatIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Chat">
        <path
          id="Vector"
          d="M19.9 1H3.1C1.945 1 1 1.99 1 3.2V23L5.2 18.6H19.9C21.055 18.6 22 17.61 22 16.4V3.2C22 1.99 21.055 1 19.9 1ZM18.85 16.4H5.2L3.1 18.6V4.3C3.1 3.695 3.5725 3.2 4.15 3.2H18.85C19.4275 3.2 19.9 3.695 19.9 4.3V15.3C19.9 15.905 19.4275 16.4 18.85 16.4Z"
          fill={props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const DisplayIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="Display">
        <g id="Group 68">
          <path
            id="Vector"
            d="M12 20C7.592 20 4 16.408 4 12C4 7.592 7.592 4 12 4C16.408 4 20 7.232 20 11.2C20 13.848 17.848 16 15.2 16H13.784C13.56 16 13.384 16.176 13.384 16.4C13.384 16.496 13.424 16.584 13.488 16.664C13.816 17.04 14 17.512 14 18C14 19.104 13.104 20 12 20ZM12 5.6C8.472 5.6 5.6 8.472 5.6 12C5.6 15.528 8.472 18.4 12 18.4C12.224 18.4 12.4 18.224 12.4 18C12.4 17.872 12.336 17.776 12.288 17.72C11.96 17.352 11.784 16.88 11.784 16.4C11.784 15.296 12.68 14.4 13.784 14.4H15.2C16.968 14.4 18.4 12.968 18.4 11.2C18.4 8.112 15.528 5.6 12 5.6Z"
            fill={props.color ? props.color : "black"}
          />
          <path
            id="Vector_2"
            d="M7.5999 12.8C8.26264 12.8 8.7999 12.2627 8.7999 11.6C8.7999 10.9373 8.26264 10.4 7.5999 10.4C6.93716 10.4 6.3999 10.9373 6.3999 11.6C6.3999 12.2627 6.93716 12.8 7.5999 12.8Z"
            fill={props.color ? props.color : "black"}
          />
          <path
            id="Vector_3"
            d="M10 9.6C10.6628 9.6 11.2 9.06274 11.2 8.4C11.2 7.73726 10.6628 7.2 10 7.2C9.33731 7.2 8.80005 7.73726 8.80005 8.4C8.80005 9.06274 9.33731 9.6 10 9.6Z"
            fill={props.color ? props.color : "black"}
          />
          <path
            id="Vector_4"
            d="M14 9.6C14.6628 9.6 15.2 9.06274 15.2 8.4C15.2 7.73726 14.6628 7.2 14 7.2C13.3373 7.2 12.8 7.73726 12.8 8.4C12.8 9.06274 13.3373 9.6 14 9.6Z"
            fill={props.color ? props.color : "black"}
          />
          <path
            id="Vector_5"
            d="M16.4 12.8C17.0627 12.8 17.6 12.2627 17.6 11.6C17.6 10.9373 17.0627 10.4 16.4 10.4C15.7372 10.4 15.2 10.9373 15.2 11.6C15.2 12.2627 15.7372 12.8 16.4 12.8Z"
            fill={props.color ? props.color : "black"}
          />
        </g>
      </g>
    </svg>
  );
};

export const ImageIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Image">
        <path
          id="Vector"
          d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z"
          fill={props.color ? props.color : "#4A99E9"}
        />
      </g>
    </svg>
  );
};

export const SendIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Comment">
        <path
          id="Vector"
          d="M4.01 6.03L11.52 9.25L4 8.25L4.01 6.03V6.03ZM11.51 14.75L4 17.97V15.75L11.51 14.75V14.75ZM2.01 3L2 10L17 12L2 14L2.01 21L23 12L2.01 3Z"
          fill={props.color ? props.color : "#4A99E9"}
        />
      </g>
    </svg>
  );
};

export const LikeIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Like">
        <path
          id="Vector"
          d="M19.66 3.99C17.02 2.19 13.76 3.03 12 5.09C10.24 3.03 6.97997 2.18 4.33997 3.99C2.93997 4.95 2.05997 6.57 1.99997 8.28C1.85997 12.16 5.29997 15.27 10.55 20.04L10.65 20.13C11.41 20.82 12.58 20.82 13.34 20.12L13.45 20.02C18.7 15.26 22.13 12.15 22 8.27C21.94 6.57 21.06 4.95 19.66 3.99ZM12.1 18.55L12 18.65L11.9 18.55C7.13997 14.24 3.99997 11.39 3.99997 8.5C3.99997 6.5 5.49997 5 7.49997 5C9.03997 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
          fill={props.active ? "red" : props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const RetweetIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="SVG=Retweet">
        <path
          id="Vector"
          d="M6.99996 7H17V8.79C17 9.24 17.54 9.46 17.85 9.14L20.64 6.35C20.84 6.15 20.84 5.84 20.64 5.64L17.85 2.85C17.54 2.54 17 2.76 17 3.21V5H5.99996C5.44996 5 4.99996 5.45 4.99996 6V10C4.99996 10.55 5.44996 11 5.99996 11C6.54996 11 6.99996 10.55 6.99996 10V7ZM17 17H6.99996V15.21C6.99996 14.76 6.45996 14.54 6.14996 14.86L3.35996 17.65C3.15996 17.85 3.15996 18.16 3.35996 18.36L6.14996 21.15C6.45996 21.46 6.99996 21.24 6.99996 20.79V19H18C18.55 19 19 18.55 19 18V14C19 13.45 18.55 13 18 13C17.45 13 17 13.45 17 14V17Z"
          fill={props.active ? "green" : props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const SettingsIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <g id="Settings">
        <path
          id="Vector"
          d="M18.1126 12.784C18.1455 12.528 18.1701 12.272 18.1701 12C18.1701 11.728 18.1455 11.472 18.1126 11.216L19.8479 9.896C20.0042 9.776 20.0453 9.56 19.9466 9.384L18.3017 6.616C18.2277 6.488 18.0879 6.416 17.9399 6.416C17.8905 6.416 17.8412 6.424 17.8 6.44L15.7522 7.24C15.3245 6.92 14.8639 6.656 14.3622 6.456L14.0497 4.336C14.025 4.144 13.8523 4 13.6467 4H10.3569C10.1513 4 9.97861 4.144 9.95393 4.336L9.64141 6.456C9.13972 6.656 8.67915 6.928 8.25148 7.24L6.2036 6.44C6.15425 6.424 6.1049 6.416 6.05556 6.416C5.91574 6.416 5.77593 6.488 5.70191 6.616L4.05702 9.384C3.9501 9.56 3.99945 9.776 4.15571 9.896L5.89107 11.216C5.85817 11.472 5.8335 11.736 5.8335 12C5.8335 12.264 5.85817 12.528 5.89107 12.784L4.15571 14.104C3.99945 14.224 3.95833 14.44 4.05702 14.616L5.70191 17.384C5.77593 17.512 5.91574 17.584 6.06378 17.584C6.11313 17.584 6.16247 17.576 6.2036 17.56L8.25148 16.76C8.67915 17.08 9.13972 17.344 9.64141 17.544L9.95393 19.664C9.97861 19.856 10.1513 20 10.3569 20H13.6467C13.8523 20 14.025 19.856 14.0497 19.664L14.3622 17.544C14.8639 17.344 15.3245 17.072 15.7522 16.76L17.8 17.56C17.8494 17.576 17.8987 17.584 17.9481 17.584C18.0879 17.584 18.2277 17.512 18.3017 17.384L19.9466 14.616C20.0453 14.44 20.0042 14.224 19.8479 14.104L18.1126 12.784ZM16.4841 11.416C16.517 11.664 16.5253 11.832 16.5253 12C16.5253 12.168 16.5088 12.344 16.4841 12.584L16.369 13.488L17.101 14.048L17.9892 14.72L17.4135 15.688L16.369 15.28L15.5136 14.944L14.7734 15.488C14.4198 15.744 14.0826 15.936 13.7454 16.072L12.8736 16.416L12.742 17.32L12.5775 18.4H11.4261L11.2698 17.32L11.1383 16.416L10.2665 16.072C9.91281 15.928 9.58383 15.744 9.25486 15.504L8.50644 14.944L7.63465 15.288L6.59014 15.696L6.01443 14.728L6.90267 14.056L7.63465 13.496L7.5195 12.592C7.49483 12.344 7.47838 12.16 7.47838 12C7.47838 11.84 7.49483 11.656 7.5195 11.416L7.63465 10.512L6.90267 9.952L6.01443 9.28L6.59014 8.312L7.63465 8.72L8.48999 9.056L9.23018 8.512C9.58384 8.256 9.92104 8.064 10.2582 7.928L11.13 7.584L11.2616 6.68L11.4261 5.6H12.5693L12.7256 6.68L12.8572 7.584L13.7289 7.928C14.0826 8.072 14.4116 8.256 14.7406 8.496L15.489 9.056L16.3608 8.712L17.4053 8.304L17.981 9.272L17.101 9.952L16.369 10.512L16.4841 11.416ZM12.0018 8.8C10.1842 8.8 8.71205 10.232 8.71205 12C8.71205 13.768 10.1842 15.2 12.0018 15.2C13.8194 15.2 15.2916 13.768 15.2916 12C15.2916 10.232 13.8194 8.8 12.0018 8.8ZM12.0018 13.6C11.0971 13.6 10.3569 12.88 10.3569 12C10.3569 11.12 11.0971 10.4 12.0018 10.4C12.9065 10.4 13.6467 11.12 13.6467 12C13.6467 12.88 12.9065 13.6 12.0018 13.6Z"
          fill={props.color ? props.color : "black"}
        />
      </g>
    </svg>
  );
};

export const DotIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 3 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <path
        id="Vector"
        d="M1.5 3.5C1.89782 3.5 2.27936 3.34196 2.56066 3.06066C2.84196 2.77936 3 2.39782 3 2C3 1.60218 2.84196 1.22064 2.56066 0.93934C2.27936 0.658035 1.89782 0.5 1.5 0.5C1.10218 0.5 0.720644 0.658035 0.43934 0.93934C0.158035 1.22064 0 1.60218 0 2C0 2.39782 0.158035 2.77936 0.43934 3.06066C0.720644 3.34196 1.10218 3.5 1.5 3.5Z"
        fill={props.color ? props.color : "black"}
      />
    </svg>
  );
};

export const DeleteIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <path
        d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
        fill={props.color ? props.color : "#E03C39"}
      />
    </svg>
  );
};

export const RemoveIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      cursor={"pointer"}
    >
      <path
        d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.3 16.3C15.91 16.69 15.28 16.69 14.89 16.3L12 13.41L9.11 16.3C8.72 16.69 8.09 16.69 7.7 16.3C7.31 15.91 7.31 15.28 7.7 14.89L10.59 12L7.7 9.11C7.31 8.72 7.31 8.09 7.7 7.7C8.09 7.31 8.72 7.31 9.11 7.7L12 10.59L14.89 7.7C15.28 7.31 15.91 7.31 16.3 7.7C16.69 8.09 16.69 8.72 16.3 9.11L13.41 12L16.3 14.89C16.68 15.27 16.68 15.91 16.3 16.3Z"
        fill={props.color ? props.color : "black"}
        fillOpacity="0.54"
      />
    </svg>
  );
};

export const AlertIcon = (props: IconProps) => {
  return (
    <svg
      width={props.width ?? "24"}
      height={props.height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
    >
      <path
        d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
        fill={props.color ?? "#E5397F"}
      />
    </svg>
  );
};
