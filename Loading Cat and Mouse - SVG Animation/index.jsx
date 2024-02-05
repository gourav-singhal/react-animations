// Inspiration: https://dribbble.com/shots/4036937-Loading-Animation
import { motify, MotiText, MotiView } from 'moti';
import * as React from 'react';
import { Dimensions, StatusBar, View } from 'react-native';
import { Easing } from 'react-native-reanimated';
import Svg, { Circle, Ellipse, G, Path } from 'react-native-svg';

const { width } = Dimensions.get("screen");
const AnimatedG = motify(G)();

const _duration = 2000;
const _durationBack = _duration / 6;

function Mouse({ size = 100 }) {
  return (
    <MotiView
      animate={{
        transform: [
          {
            translateX: [
              {
                value: -size,
                delay: _durationBack,
                type: "timing",
                duration: 0,
              },
              { value: width + size, duration: _duration, type: "timing" },
            ],
          },
        ],
      }}
      transition={{
        loop: true,
        repeatReverse: false,
        type: "timing",
      }}>
      <Svg
        viewBox='0 0 512 512'
        height={size}
        width={size}
        xmlns='http://www.w3.org/2000/svg'>
        <Path
          d='M279.946 95.008l128.097 118.744v81.386H201.456C137.692 295.137 86 243.445 86 179.681 86 78.915 206.048 26.505 279.946 95.008z'
          fill='#8aa8bd'
        />
        <Path
          d='M317.217 232.35c0 34.676 28.111 62.787 62.787 62.787H502l-70.902-99.277c-35.5-49.709-113.881-24.594-113.881 36.49z'
          fill='#8aa8bd'
        />
        <Path
          d='m485.449 254.755h16.551c5.522 0 10-4.477 10-10s-4.477-10-10-10h-30.4l20.874-20.874c3.905-3.905 3.905-10.237 0-14.142-3.904-3.905-10.234-3.905-14.143 0l-18.769 18.769-20.326-28.46c-5.023-7.034-11.002-12.932-17.645-17.627l19.911-3.174c25.822-4.117 44.563-26.083 44.563-52.231 0-29.164-23.727-52.89-52.891-52.89-26.148 0-48.113 18.742-52.23 44.563l-.078.487-.078-.487c-4.117-25.821-26.083-44.563-52.23-44.563-17.795 0-33.554 8.843-43.146 22.357-36.486-32.915-87.072-41.563-132.483-22.494-5.092 2.139-7.486 8-5.348 13.092 2.138 5.091 7.998 7.485 13.092 5.348 38.627-16.222 81.726-8.592 112.475 19.912l3.729 3.457c-.785 3.618-1.209 7.368-1.209 11.217 0 26.147 18.741 48.114 44.562 52.231l18.554 2.958c-19.649 13.204-31.567 35.155-31.567 60.146 0 20.766 8.755 39.513 22.751 52.787h-50.998c-3.972-23.052-21.431-41.549-43.933-47.042 7.47-11.023 11.638-24.174 11.638-37.74 0-37.064-30.153-67.217-67.217-67.217-5.523 0-10 4.477-10 10s4.477 10 10 10c26.036 0 47.217 21.182 47.217 47.217 0 14.096-6.068 27.075-16.755 36.073h-6.92c-5.523 0-10 4.477-10 10s4.477 10 10 10h18.115c17.887 0 32.973 12.198 37.393 28.71h-57.052c-58.148-.001-105.456-47.309-105.456-105.458 0-14.139 2.568-27.656 7.634-40.177 2.071-5.12-.4-10.949-5.52-13.021-5.12-2.071-10.949.4-13.021 5.52-2.881 7.12-5.075 14.499-6.591 22.083-46.215 12.197-78.915 54.599-78.5 102.921.498 57.663 48.316 104.575 106.596 104.575h130.863c21.068 0 38.208 17.14 38.208 38.208s-17.14 38.207-38.208 38.207h-52.961c-5.523 0-10 4.477-10 10s4.477 10 10 10h52.961c32.096 0 58.208-26.112 58.208-58.207s-26.112-58.208-58.208-58.208h-130.863c-47.347 0-86.193-38.017-86.595-84.746-.314-36.48 22.653-68.79 56.059-81.038-.037 1.291-.062 2.584-.062 3.884 0 69.177 56.279 125.456 125.456 125.456h214.729l-10.967 10.966c-3.905 3.905-3.905 10.237 0 14.142 1.953 1.953 4.512 2.929 7.071 2.929s5.118-.977 7.071-2.929l23.946-23.946v18.021c0 5.523 4.478 10 10 10s10-4.477 10-10v-19.184h38.694c3.746 0 7.178-2.093 8.892-5.424s1.423-7.34-.754-10.388zm-84.755-142.918c2.561-16.057 16.221-27.712 32.48-27.712 18.136 0 32.891 14.754 32.891 32.89 0 16.26-11.654 29.92-27.712 32.479l-44.801 7.143zm-105.025 5.179c0-18.136 14.754-32.89 32.89-32.89 16.26 0 29.92 11.655 32.48 27.712l7.142 44.8-44.801-7.143c-16.057-2.559-27.711-16.219-27.711-32.479zm84.335 168.121c-29.106 0-52.786-23.68-52.786-52.787 0-28.398 18.947-44.587 36.679-50.269 5.166-1.655 10.932-2.645 16.921-2.645 14.568 0 30.447 5.857 42.144 22.235l59.609 83.465h-102.567z'
          fill='#000'
        />
        <Path
          d='m119.38 108.206c2.63 0 5.2-1.07 7.07-2.93 1.86-1.86 2.93-4.44 2.93-7.07 0-2.64-1.07-5.21-2.93-7.07-1.87-1.87-4.44-2.93-7.07-2.93-2.64 0-5.22 1.06-7.08 2.93-1.86 1.86-2.93 4.43-2.93 7.07 0 2.63 1.07 5.21 2.93 7.07 1.86 1.859 4.44 2.93 7.08 2.93z'
          fill='#000'
        />
        <Path
          d='m387.149 219.056c-2.63 0-5.21 1.07-7.069 2.93-1.86 1.86-2.931 4.44-2.931 7.07s1.07 5.21 2.931 7.07c1.859 1.86 4.439 2.93 7.069 2.93 2.631 0 5.21-1.07 7.07-2.93s2.93-4.44 2.93-7.07-1.069-5.21-2.93-7.07c-1.86-1.86-4.439-2.93-7.07-2.93z'
          fill='#000'
        />
        <G fill='#a7bdcd'>
          <Path d='M321.806 159.371l58.422 9.314-9.314-58.422c-3.319-20.818-21.274-36.138-42.355-36.138-23.688 0-42.89 19.203-42.89 42.89 0 21.081 15.319 39.037 36.137 42.356zM390.82 110.263l-9.314 58.422 58.422-9.314c20.818-3.319 36.138-21.274 36.138-42.355 0-23.688-19.203-42.89-42.89-42.89-21.082-.001-39.037 15.319-42.356 36.137z' />
        </G>
        <G>
          <Path d='M485.449 254.755H502c5.522 0 10-4.477 10-10s-4.477-10-10-10h-30.4l20.874-20.874c3.905-3.905 3.905-10.237 0-14.142-3.904-3.905-10.234-3.905-14.143 0l-18.769 18.769-20.326-28.46c-5.023-7.034-11.002-12.932-17.645-17.627l19.911-3.174c25.822-4.117 44.563-26.083 44.563-52.231 0-29.164-23.727-52.89-52.891-52.89-26.148 0-48.113 18.742-52.23 44.563l-.078.487-.078-.487c-4.117-25.821-26.083-44.563-52.23-44.563-17.795 0-33.554 8.843-43.146 22.357-36.486-32.915-87.072-41.563-132.483-22.494-5.092 2.139-7.486 8-5.348 13.092 2.138 5.091 7.998 7.485 13.092 5.348 38.627-16.222 81.726-8.592 112.475 19.912l3.729 3.457a52.836 52.836 0 00-1.209 11.217c0 26.147 18.741 48.114 44.562 52.231l18.554 2.958c-19.649 13.204-31.567 35.155-31.567 60.146 0 20.766 8.755 39.513 22.751 52.787H278.97c-3.972-23.052-21.431-41.549-43.933-47.042 7.47-11.023 11.638-24.174 11.638-37.74 0-37.064-30.153-67.217-67.217-67.217-5.523 0-10 4.477-10 10s4.477 10 10 10c26.036 0 47.217 21.182 47.217 47.217 0 14.096-6.068 27.075-16.755 36.073H203c-5.523 0-10 4.477-10 10s4.477 10 10 10h18.115c17.887 0 32.973 12.198 37.393 28.71h-57.052C143.308 285.137 96 237.829 96 179.68c0-14.139 2.568-27.656 7.634-40.177 2.071-5.12-.4-10.949-5.52-13.021-5.12-2.071-10.949.4-13.021 5.52a123.151 123.151 0 00-6.591 22.083C32.287 166.282-.413 208.684.002 257.006.5 314.669 48.318 361.581 106.598 361.581h130.863c21.068 0 38.208 17.14 38.208 38.208s-17.14 38.207-38.208 38.207H184.5c-5.523 0-10 4.477-10 10s4.477 10 10 10h52.961c32.096 0 58.208-26.112 58.208-58.207s-26.112-58.208-58.208-58.208H106.598c-47.347 0-86.193-38.017-86.595-84.746-.314-36.48 22.653-68.79 56.059-81.038a135.438 135.438 0 00-.062 3.884c0 69.177 56.279 125.456 125.456 125.456h214.729l-10.967 10.966c-3.905 3.905-3.905 10.237 0 14.142 1.953 1.953 4.512 2.929 7.071 2.929s5.118-.977 7.071-2.929l23.946-23.946v18.021c0 5.523 4.478 10 10 10s10-4.477 10-10v-19.184H502a10 10 0 008.138-15.812zm-84.755-142.918c2.561-16.057 16.221-27.712 32.48-27.712 18.136 0 32.891 14.754 32.891 32.89 0 16.26-11.654 29.92-27.712 32.479l-44.801 7.143zm-105.025 5.179c0-18.136 14.754-32.89 32.89-32.89 16.26 0 29.92 11.655 32.48 27.712l7.142 44.8-44.801-7.143c-16.057-2.559-27.711-16.219-27.711-32.479zm84.335 168.121c-29.106 0-52.786-23.68-52.786-52.787 0-28.398 18.947-44.587 36.679-50.269a55.78 55.78 0 0116.921-2.645c14.568 0 30.447 5.857 42.144 22.235l59.609 83.465H380.004z' />
          <Path d='M387.149 219.056c-2.63 0-5.21 1.07-7.069 2.93-1.86 1.86-2.931 4.44-2.931 7.07s1.07 5.21 2.931 7.07a10.072 10.072 0 007.069 2.93c2.631 0 5.21-1.07 7.07-2.93s2.93-4.44 2.93-7.07-1.069-5.21-2.93-7.07a10.074 10.074 0 00-7.07-2.93zM119.38 108.206c2.63 0 5.2-1.07 7.07-2.93 1.86-1.86 2.93-4.44 2.93-7.07 0-2.64-1.07-5.21-2.93-7.07a10.05 10.05 0 00-7.07-2.93c-2.64 0-5.22 1.06-7.08 2.93a10.058 10.058 0 00-2.93 7.07c0 2.63 1.07 5.21 2.93 7.07a10.086 10.086 0 007.08 2.93z' />
        </G>
      </Svg>
    </MotiView>
  );
}
function Cat({ size = 256 }) {
  return (
    <Svg
      viewBox='0 0 512 512'
      height={size}
      width={size}
      xmlns='http://www.w3.org/2000/svg'>
      <Path
        d='M425.161 449.401a210.893 210.893 0 003.141-36.333c0-22.243-3.439-43.543-9.725-63.209-8.247-25.798-11.597-52.918-8.992-79.877a135.7 135.7 0 00.624-14.063c-.205-27.912-9.061-53.881-24.001-75.346 2.433-16.032 9.294-69.889-6.96-77.697-12.113-5.819-36.171 14.369-52.194 29.966a132.859 132.859 0 00-49.22-10.148c-20.801-.282-40.53 4.174-58.187 12.346-15.937-15.809-41.74-38.262-54.431-32.164-19.132 9.192-6.236 82.198-6.236 82.198l5.212-2.504c-14.189 21.288-22.468 46.853-22.468 74.356 0 3.558.139 7.084.411 10.571 2.089 26.773-.992 53.694-9.61 79.128-6.965 20.556-10.795 42.973-10.795 66.443 0 13.93 1.355 27.487 3.908 40.506-19.86-.265-35.935-16.501-35.935-36.424v-24.669c0-13.36-10.83-24.19-24.19-24.19s-24.19 10.83-24.19 24.19v24.669c0 46.764 38.045 84.809 84.809 84.809.317 0 .634-.006.95-.019l14.359-.564c.037.078.072.158.11.236h266.931c.098-.202.188-.41.285-.613v.494c19.05 0 34.494-12.405 34.494-27.708-.001-10.536-7.322-19.697-18.1-24.384z'
        fill='#e8c2d8'
      />
      <Path
        d='M290.634 241.715c0 9.379-6.992 16.982-15.618 16.982s-15.618-7.603-15.618-16.982l15.444-12.426z'
        fill='#d789b9'
      />
      <Path
        d='M425.161 449.402a210.893 210.893 0 003.141-36.333c0-22.244-3.439-43.545-9.726-63.21-8.363-26.16-11.285-53.69-8.883-81.049.373-4.243.548-8.543.516-12.89-.205-27.912-9.061-53.881-24.001-75.346 2.433-16.032 9.294-69.889-6.96-77.697-6.405-3.077-16.151 1.12-26.282 8.063 5.791 16.047 1.585 48.941-.124 60.3 13.055 18.92 20.794 41.809 20.973 66.412a120.99 120.99 0 01-.545 12.396c-2.276 23.762.65 47.667 7.857 70.405 5.494 17.333 8.492 35.744 10.012 55.29.84 10.801.112 28.6-.449 39.062-.56 10.462-7.598 39.301-31.324 39.301l-171.135.105c-33.732 0-62.139-25.465-65.529-59.027a204.34 204.34 0 01-.113-1.152 213.088 213.088 0 00-.859 19.036c0 32.19 7.208 62.401 19.821 88.544h266.931c.098-.202.188-.41.285-.613v.494c19.05 0 34.494-12.405 34.494-27.708-.001-10.536-7.322-19.698-18.1-24.383z'
        fill='#d392d8'
      />
      <Path
        d='M250.605 150.261a7.273 7.273 0 01.047-1.038c-.728-13.299 2.258-25.142 10.663-34.859-1.118-14.854 1.769-26.758 10.541-34.461 3.254-16.83 9.021-34.994 16.546-54.092.893-2.92 5.176-2.393 5.334.656 2.623 16.338 4.084 31.605 2.279 43.865 4.858 9.401 5.816 19.235 1.542 29.674 4.107 9.582 5.181 19.826 1.611 31.017 5.748 9.938 3.018 19.743 2.129 24.351-3.963 15.552-50.43 10.06-50.692-5.113z'
        fill='#f6e06e'
      />
      <Path
        d='M250.605 143.43a7.273 7.273 0 01.047-1.038c-.517-9.445.853-18.15 4.693-25.886a53.078 53.078 0 00-.125 7.61 6.18 6.18 0 00-.044.886c.194 12.949 41.074 17.523 44.598 4.24.153-.759.367-1.686.577-2.745 4.147 9.121 1.766 17.795.946 22.046-3.963 15.553-50.43 10.061-50.692-5.113z'
        fill='#dda86a'
      />
      <Path
        d='M55.253 6.348l8.631 24.269c.37 1.039 1.101 1.863 2.024 2.279L87.47 42.61c3.046 1.373 3.046 6.226 0 7.598l-21.562 9.715c-.923.416-1.655 1.239-2.024 2.278L55.253 86.47c-1.219 3.429-5.532 3.429-6.751 0l-8.631-24.269c-.369-1.039-1.101-1.862-2.024-2.278l-21.562-9.715c-3.046-1.372-3.046-6.226 0-7.598l21.562-9.714c.923-.416 1.655-1.239 2.024-2.279l8.631-24.269c1.219-3.428 5.532-3.428 6.751 0zM472.407 37.972l6.402 18.002c.274.771.817 1.382 1.502 1.69l15.994 7.206c2.26 1.018 2.26 4.618 0 5.636l-15.994 7.206c-.685.308-1.228.919-1.502 1.69l-6.402 18.002c-.904 2.543-4.103 2.543-5.008 0l-6.402-18.002c-.274-.771-.817-1.382-1.501-1.69l-15.994-7.206c-2.26-1.018-2.26-4.618 0-5.636l15.994-7.206c.685-.308 1.227-.919 1.501-1.69l6.402-18.002c.905-2.544 4.103-2.544 5.008 0z'
        fill='#e9c3d9'
      />
      <G fill='#d88aba'>
        <Circle
          cx={204.827}
          cy={40.418}
          transform='rotate(-80.8 204.813 40.447)'
          r={8.13}
        />
        <Ellipse
          cx={84.778}
          cy={160.328}
          rx={14.254}
          ry={14.253}
          transform='rotate(-7 84.928 160.558)'
        />
      </G>
      <G>
        <AnimatedG
          fill='#3c122c'
          animate={{
            transform: [
              {
                translateX: [
                  {
                    value: -20,
                    duration: _durationBack,
                    type: "timing",
                    easing: Easing.inOut(Easing.ease),
                  },
                  {
                    value: 20,
                    duration: _duration,
                    type: "timing",
                  },
                ],
              },
            ],
          }}
          transition={{
            loop: true,
          }}>
          <Circle
            cx={212.179}
            cy={230.268}
            transform='rotate(-76.7 212.245 230.325)'
            r={12.389}
          />
          <Circle
            cx={337.854}
            cy={230.268}
            transform='rotate(-45 337.838 230.347)'
            r={12.389}
          />
        </AnimatedG>
        <AnimatedG
          fill='#3c122c'
          animate={{
            transform: [
              {
                translateX: [
                  {
                    value: -10,
                    duration: _durationBack,
                    type: "timing",
                    easing: Easing.inOut(Easing.ease),
                  },
                  {
                    value: 10,
                    duration: _duration,
                    type: "timing",
                  },
                ],
              },
            ],
          }}
          transition={{
            loop: true,
          }}>
          <Path d='M302.126 239.538a6.024 6.024 0 00-6.024-6.024c-8.228 0-14.921-6.694-14.921-14.922a6.024 6.024 0 00-6.024-6.024c-.047 0-.093.006-.14.007-.047-.001-.092-.007-.14-.007a6.024 6.024 0 00-6.024 6.024c0 8.228-6.694 14.922-14.921 14.922a6.02 6.02 0 00-.25 12.036c1.723 10.867 10.632 19.172 21.336 19.172s19.613-8.306 21.335-19.172a6.02 6.02 0 005.773-6.012zm-27.109 13.136c-4.922 0-8.987-4.258-9.528-9.718a27.122 27.122 0 009.528-7.576 27.122 27.122 0 009.528 7.576c-.542 5.459-4.606 9.718-9.528 9.718zM230.017 404.99c-12.64.001-25.701-8.538-32.462-22.568a6.023 6.023 0 012.811-8.042 6.023 6.023 0 018.042 2.811c5.994 12.437 18.521 18.869 27.923 14.339 9.402-4.531 12.175-18.337 6.181-30.775a6.026 6.026 0 012.812-8.043 6.027 6.027 0 018.042 2.812c8.878 18.423 3.583 39.444-11.804 46.86-3.669 1.769-7.586 2.606-11.545 2.606zM356.696 395.103c-4.429 0-8.976-1.059-13.407-3.172-8.027-3.827-14.759-10.731-18.954-19.437a6.026 6.026 0 012.812-8.043 6.027 6.027 0 018.042 2.812c3.008 6.243 7.726 11.142 13.286 13.792 5.112 2.438 10.31 2.632 14.637.547s7.414-6.272 8.691-11.789c1.39-6 .498-12.742-2.511-18.986a6.025 6.025 0 0110.854-5.231c4.196 8.706 5.402 18.272 3.395 26.936-2.119 9.146-7.517 16.221-15.199 19.924a26.676 26.676 0 01-11.646 2.647z' />
        </AnimatedG>
        <Path
          d='M170.238 351.083c-1.331 0-2.685-.266-3.985-.829-5.088-2.204-7.427-8.115-5.224-13.203a154.86 154.86 0 015.74-11.85c2.63-4.882 8.72-6.707 13.602-4.076s6.707 8.72 4.076 13.602a133.923 133.923 0 00-4.99 10.304 10.046 10.046 0 01-9.219 6.052zM156.912 432.443c-5.109 0-9.479-3.883-9.982-9.074-1.648-17.027-.44-34.869 3.591-53.029 1.201-5.413 6.564-8.83 11.977-7.626 5.413 1.202 8.827 6.564 7.626 11.977-3.572 16.095-4.652 31.822-3.207 46.743.534 5.519-3.507 10.427-9.027 10.961a9.775 9.775 0 01-.978.048z'
          fill='#fff'
        />
        <Path
          d='M436.17 444.062a222.633 222.633 0 002.172-30.994c0-22.795-3.433-45.09-10.202-66.266-8.097-25.328-10.978-50.849-8.561-75.855.482-4.993.707-10.074.67-15.101-.204-27.713-8.33-54.479-23.545-77.671 1.349-9.637 3.083-24.881 3.072-39.541-.02-25.276-5.16-39.513-16.18-44.807-8.501-4.084-23.766-5.48-58.859 27.347a141.611 141.611 0 00-10.956-3.461c.734-8.185-.331-16.349-3.203-24.412 3.65-11.379 2.961-22.799-2.073-34.04 1.332-12.15.433-27.045-2.854-47.623A13.008 13.008 0 00294.288.099a13.008 13.008 0 00-13.888 8.62c-8.474 21.536-14.35 40.446-17.921 57.679-8.899 9.326-13.116 22.578-12.543 39.507a56.21 56.21 0 00-6.089 10.334 142.263 142.263 0 00-22.02 6.912c-36.501-34.819-52.23-33.517-60.959-29.325-12.229 5.875-17.305 23.042-15.976 54.026.851 19.835 4.064 38.196 4.2 38.968l.027.147.166.864c-11.526 21.103-17.601 44.907-17.601 69.094 0 3.78.148 7.6.441 11.353 2.03 26.018-1.034 51.293-9.109 75.124-7.516 22.181-11.326 45.62-11.326 69.665 0 9.104.584 18.172 1.693 27.135-8.112-4.521-13.639-13.175-13.639-23.053V392.48c0-18.875-15.356-34.23-34.23-34.23s-34.23 15.356-34.23 34.23v24.669c0 52.3 42.55 94.85 94.85 94.85.447 0 283.471-.405 284.014-.496 23.919-.622 43.155-17.297 43.155-37.719-.002-12.058-6.716-22.806-17.133-29.722zM51.364 417.15v-5.372h28.299v5.372c0 4.179.563 8.235 1.614 12.098h-28.92a74.935 74.935 0 01-.993-12.098zm14.149-38.818c7.802 0 14.15 6.347 14.15 14.15v7.248H51.364v-7.248c0-7.803 6.347-14.15 14.149-14.15zm60.62 113.587c-32.779 0-60.679-21.212-70.745-50.623H86.5c6.723 10.955 17.85 18.964 30.881 21.477a210.692 210.692 0 009.019 29.141c-.089.002-.178.005-.267.005zM294.72 136.635c1.505 5.215.485 10.202-.313 14.061l-.154.748c-1.071 1.067-6.37 3.368-16.377 2.679-7.762-.535-13.4-2.505-16.598-4.239zm-5.758-92.099c.137 5.235-.041 10.34-.718 14.931-.007.047-.007.092-.013.138-.021.155-.034.31-.048.466l-4.086 1.809a291.522 291.522 0 014.865-17.344zm-10.625 34.423c.702-.647 1.349-1.359 1.853-2.174l11.554-5.113c1.74 5.997 1.343 11.827-1.169 17.961a9.552 9.552 0 00-.473 1.511l-20.08 8.811c.433-9.563 3.173-16.481 8.315-20.996zm-10.58 36.776a10.198 10.198 0 001.476-2.276l23.416-10.276c1.893 7.04 1.701 14.019-.585 21.183a6.316 6.316 0 01-.118.407l-33.292 13.189c.837-8.818 3.842-16.145 9.103-22.227zm141.01 375.718c-.501 0-.989.049-1.471.12H290.789c3.357-5.304 5.267-11.359 5.267-17.787 0-20.815-19.978-37.748-44.535-37.748-5.545 0-10.04 4.495-10.04 10.04s4.496 10.04 10.04 10.04c13.255 0 24.454 8.091 24.454 17.668s-11.198 17.668-24.454 17.668c-.501 0-.989.049-1.471.12H147.976c-10.616-24.123-16.205-51.127-16.205-78.504 0-21.85 3.453-43.12 10.264-63.221 8.951-26.419 12.353-54.388 10.11-83.13-.253-3.236-.38-6.53-.38-9.791 0-21.924 5.794-43.476 16.754-62.325a10.033 10.033 0 001.18-6.941l-.843-4.391c-.199-1.15-3.032-17.764-3.86-35.331-1.468-31.153 4.545-35.992 4.527-35.994 2.451-.804 15.637 3.029 43.053 30.225a10.04 10.04 0 0011.288 1.984 123.8 123.8 0 0114.614-5.662 80.167 80.167 0 00-.058 8.702c-.028.487-.038.994-.026 1.512.249 12.843 13.847 22.706 34.659 25.132 2.941.343 5.78.51 8.497.51 17.033 0 29.291-6.581 32.141-17.775.15-.61.235-1.148.379-1.809.715-3.458 1.857-9.006 1.389-15.545 2.605.88 5.19 1.838 7.746 2.898a10.038 10.038 0 0010.851-2.079c26.026-25.332 38.555-28.861 40.805-28.131.05.032 4.97 3.927 4.831 27.845-.089 15.235-2.176 31.172-3.411 39.316a10.048 10.048 0 001.685 7.242c14.341 20.605 22.018 44.701 22.202 69.685.032 4.337-.162 8.719-.577 13.023-2.68 27.733.49 55.961 9.422 83.9 6.137 19.197 9.249 39.435 9.249 60.152 0 7.906-.465 15.818-1.379 23.608a52.357 52.357 0 00-8.116-.64c-5.545 0-10.04 4.495-10.04 10.04s4.496 10.04 10.04 10.04c13.255 0 24.454 8.091 24.454 17.668 0 9.575-11.199 17.666-24.454 17.666z'
          fill='#3c122c'
        />
      </G>
    </Svg>
  );
}

export default function LoadingCat() {
  return (
    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
      <StatusBar hidden />
      <View style={{ alignItems: "center" }}>
        <Cat size={width * 0.7} />
      </View>
      <Mouse size={width * 0.2} />
      <MotiText
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "timing",
          duration: _duration / 2,
          loop: true,
        }}
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: 70,
          fontSize: 18,
          fontFamily: "Menlo",
          color: "#d88aba",
        }}>
        __ Loading __
      </MotiText>
      <MotiText
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: 40,
          fontSize: 12,
          fontFamily: "Menlo",
          color: "#3c122c",
        }}>
        SVGs by FlatIcon.com
      </MotiText>
    </View>
  );
}
