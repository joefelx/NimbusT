import Image from "next/image";
import logoimage from "../assets/Logo-individual transparent.png";
import Profile from "../assets/profile.jpg";

export function Gradient() {
  return (
    <div className="absolute">
      {/* <Image /> */}

      {/* <Image src={Gradient1} /> */}
      <svg
        width="1440"
        height="1030"
        viewBox="0 0 1440 1030"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_4_40)">
          <path
            d="M448.525 306.673C438.418 305.966 385.102 311.16 252.697 337.588L247.06 351.729L294.121 395.118L366.799 448.818L469.887 377.836L682.14 392.679L866.639 435.152L1132.86 424.196L1238.51 442.109L1280.58 364.856L1132.07 309.863L959.886 342.431L775.898 329.565L656.076 300.135L565.701 314.867L448.525 306.673Z"
            fill="#FA00A5"
          />
          <path
            d="M238.748 507.529L173.424 407.729L155.558 419.511L154.232 438.465L112.833 528.296L533.598 618.868L260.522 661.423L342.609 698.74L633.122 687.477L835.633 627.458L680.728 538.435L378.832 527.85L238.748 507.529Z"
            fill="#8F00FF"
          />
          <path
            d="M756.907 388.976C751.552 465.557 761.103 542.051 626.281 532.623C491.459 523.195 341.763 792.267 347.119 715.686C352.474 639.106 337.068 480.412 471.89 489.84C606.712 499.268 762.262 312.395 756.907 388.976Z"
            fill="#FFF500"
          />
          <path
            d="M758.701 605.037L834.532 547.185L985.346 439.443L1005.17 381.685L1080.08 433.036L1074.18 517.33L1190.96 656.815L919.048 616.249L758.701 605.037Z"
            fill="#00A3FF"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_4_40"
            x="-200"
            y="-60"
            width="1783.68"
            height="1152.27"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_4_40"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export function Loading() {
  return (
    <div className="absolute w-full h-full backdrop-blur-sm">
      <div
        aria-label="Loading..."
        className="w-full h-full flex justify-center items-center"
        role="status"
      >
        <svg class="h-12 w-12 animate-spin" viewBox="3 3 18 18">
          <path
            class="fill-gray-200"
            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          ></path>
          <path
            class="fill-gray-800"
            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export function Tick() {
  return (
    <div className="absolute w-full h-full flex justify-center items-center backdrop-blur-sm z-40">
      <svg
        className="w-[56px] h-[56px] rounded-[50%] block stroke-2 stroke-white m-[10%]  animate-ping"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="#1DA1F2"
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </div>
  );
}

export function Logo() {
  return (
    <Image src={logoimage} className="w-[30px] cursor-pointer" alt="Logo" />
  );
}

export default Profile;
