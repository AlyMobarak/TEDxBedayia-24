"use client";
import Link from "next/link";
import "./info.css";

function infoItem(text: string, svg: any) {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {svg}
      <span
        className="font-[Sansation] text-[2em]/[2rem] max-phone:text-[1.25em]/[1.25rem]"
        style={{ fontWeight: 400 }}
      >
        {text}
      </span>
    </div>
  );
}

function infoLink(text: string, svg: any, link: string) {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {svg}
      <Link
        href={link}
        className="font-[Sansation] text-[2em]/[2rem] text-secondary-200 underline max-phone:text-[1.25em]/[1.25rem]"
        style={{ fontWeight: 400 }}
      >
        {text}
      </Link>
    </div>
  );
}

function vendor(
  caption: string,
  image: any,
  decoration: any,
  top: boolean,
  left: boolean,
  x: string,
  y: string,
) {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center gap-4">
        {image}
        <span
          className="font-[Sansation] text-[1.5em]/[1.5rem]"
          style={{ fontWeight: 400 }}
        >
          {caption}
        </span>
      </div>
      {top && left ? (
        <div className="absolute" style={{ top: x, left: y }}>
          {decoration}
        </div>
      ) : (
        ""
      )}
      {!top && left ? (
        <div className="absolute" style={{ bottom: x, left: y }}>
          {decoration}
        </div>
      ) : (
        ""
      )}
      {!top && !left ? (
        <div className="absolute" style={{ bottom: x, right: y }}>
          {decoration}
        </div>
      ) : (
        ""
      )}
      {top && !left ? (
        <div className="absolute" style={{ top: x, right: y }}>
          {decoration}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default function Info() {
  return (
    <section
      id="info"
      className="max-phone:pt-[2'rem] mx-0 mb-[4.5rem] mt-4 w-[100%] max-w-[100vw]"
    >
      <div
        id="info-title"
        className="mb-6 font-title font-bold max-phone:text-[2.5em]"
      >
        Event Information
      </div>
      <center className="flex w-screen shrink-0 flex-row justify-center gap-5 text-start max-phone:flex-col">
        <div className="flex w-full flex-col gap-4 text-center">
          {infoItem(
            "Friday, 31st of January, 2025",
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <rect
                x="6"
                y="12"
                width="36"
                height="30"
                rx="4"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M8 22H40"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 32H30"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 6L16 14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M32 6L32 14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>,
          )}
          {infoItem(
            "03:00 PM",
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="26" r="14" stroke="white" strokeWidth="2" />
              <path
                d="M10 10L6 14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M38 10L42 14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 22L23.8093 25.8729C23.9172 25.9448 24.0622 25.9223 24.1432 25.821L28 21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>,
          )}
          {infoLink(
            "Bedayia International School",
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.3981 39.8097C26.6803 38.6808 38 32.5493 38 22C38 14.268 31.732 8 24 8C16.268 8 10 14.268 10 22C10 32.5493 21.3197 38.6808 23.6019 39.8097C23.8572 39.936 24.1428 39.936 24.3981 39.8097ZM24 28C27.3137 28 30 25.3137 30 22C30 18.6863 27.3137 16 24 16C20.6863 16 18 18.6863 18 22C18 25.3137 20.6863 28 24 28Z"
                fill="#C5CEEB"
                fillOpacity="0.25"
              />
              <path
                d="M24.3981 39.8097L23.9547 38.9134H23.9547L24.3981 39.8097ZM23.6019 39.8097L24.0453 38.9134H24.0453L23.6019 39.8097ZM37 22C37 26.8936 34.3766 30.8205 31.3621 33.7164C28.3515 36.6085 25.0528 38.3702 23.9547 38.9134L24.8415 40.7061C26.0256 40.1203 29.5279 38.2518 32.7477 35.1587C35.9636 32.0692 39 27.6557 39 22H37ZM24 9C31.1797 9 37 14.8203 37 22H39C39 13.7157 32.2843 7 24 7V9ZM11 22C11 14.8203 16.8203 9 24 9V7C15.7157 7 9 13.7157 9 22H11ZM24.0453 38.9134C22.9472 38.3702 19.6485 36.6085 16.6379 33.7164C13.6234 30.8205 11 26.8936 11 22H9C9 27.6557 12.0364 32.0692 15.2523 35.1587C18.4721 38.2518 21.9744 40.1203 23.1585 40.7061L24.0453 38.9134ZM23.9547 38.9134C23.9614 38.9101 23.9776 38.9045 24 38.9045C24.0224 38.9045 24.0386 38.9101 24.0453 38.9134L23.1585 40.7061C23.6932 40.9706 24.3068 40.9706 24.8415 40.7061L23.9547 38.9134ZM29 22C29 24.7614 26.7614 27 24 27V29C27.866 29 31 25.866 31 22H29ZM24 17C26.7614 17 29 19.2386 29 22H31C31 18.134 27.866 15 24 15V17ZM19 22C19 19.2386 21.2386 17 24 17V15C20.134 15 17 18.134 17 22H19ZM24 27C21.2386 27 19 24.7614 19 22H17C17 25.866 20.134 29 24 29V27Z"
                fill="white"
              />
            </svg>,
            "https://maps.app.goo.gl/KjaRfqvMDMvuWBLu9",
          )}
          {infoItem(
            "Gate #2",
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M12 10.5V26H21.382C21.6827 26 21.833 26 21.9538 26.0747C22.0747 26.1493 22.1419 26.2838 22.2764 26.5528L23.7236 29.4472C23.8581 29.7162 23.9253 29.8507 24.0462 29.9253C24.167 30 24.3173 30 24.618 30H35.5C35.7357 30 35.8536 30 35.9268 29.9268C36 29.8536 36 29.7357 36 29.5V14.5C36 14.2643 36 14.1464 35.9268 14.0732C35.8536 14 35.7357 14 35.5 14H24.618C24.3173 14 24.167 14 24.0462 13.9253C23.9253 13.8507 23.8581 13.7162 23.7236 13.4472L22.2764 10.5528C22.1419 10.2838 22.0747 10.1493 21.9538 10.0747C21.833 10 21.6827 10 21.382 10H12.5C12.2643 10 12.1464 10 12.0732 10.0732C12 10.1464 12 10.2643 12 10.5Z"
                fill="#C2CDEA"
                fillOpacity="0.25"
              />
              <path
                d="M12 26V10.5C12 10.2643 12 10.1464 12.0732 10.0732C12.1464 10 12.2643 10 12.5 10H21.382C21.6827 10 21.833 10 21.9538 10.0747C22.0747 10.1493 22.1419 10.2838 22.2764 10.5528L23.7236 13.4472C23.8581 13.7162 23.9253 13.8507 24.0462 13.9253C24.167 14 24.3173 14 24.618 14H35.5C35.7357 14 35.8536 14 35.9268 14.0732C36 14.1464 36 14.2643 36 14.5V29.5C36 29.7357 36 29.8536 35.9268 29.9268C35.8536 30 35.7357 30 35.5 30H24.618C24.3173 30 24.167 30 24.0462 29.9253C23.9253 29.8507 23.8581 29.7162 23.7236 29.4472L22.2764 26.5528C22.1419 26.2838 22.0747 26.1493 21.9538 26.0747C21.833 26 21.6827 26 21.382 26H12ZM12 26V38"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>,
          )}
        </div>
      </center>
    </section>
  );
}
