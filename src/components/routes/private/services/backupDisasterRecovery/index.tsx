import React from "react";
import { AgnietBg2, BackupRecovery } from "../../../../../assets";

export default function BackupDisasterRecovery() {
  return (
    <div
      className="full-height-container"
      style={{
        backgroundImage: `url(${AgnietBg2})`,
        backgroundSize: "100%",
        backgroundPositionY: "100%",
      }}
    >
      <div className="container">
        <div className="d-flex gap-5 align-items-center pt-4">
          <div>
            <img
              src={BackupRecovery}
              alt="businessImage"
              width={600}
              className="rounded"
            />
          </div>
          <div>
            <p>
              Do you have critical data stored on-site? Unity Networking will
              provide you with a backup solution so you can have peace of mind
              knowing your data is safe and recoverable. Our data backup
              solutions include on-site and cloud backups. We can replicate your
              entire servers and host it in our offsite data center for maximum
              protection.
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-4">
        <h5>
          With Unity Networking's Backup and Disaster Recovery solutions, you
          get:
        </h5>
        <ul>
          <li>Data redundancy - we make a backup of your backups</li>
          <li>
            Offsite storage - our remote storage will protect your valuable data
          </li>
          <li>
            Seeding & bandwidth throttling - full-speed backup without slowing
            your Internet connection
          </li>
          <li>
            All-inclusive agents - our solutions integrate seamlessly with your
            current systems
          </li>
          <li>Extensive reporting - detailed data backup history report</li>
          <li>Inclusive updates - software updates without additional cost</li>
        </ul>
        <p>
          We can't stress enough the importance of having a data backup strategy
          in place. But we also understand that you simply don't have the time
          to manage all backup and recovery operations for your business. Leave
          it to the experts at Unity Networking - we take no chances when it
          comes to data security, and we'll ensure your data won't be
          compromised in the event of a disaster.
        </p>
      </div>
    </div>
  );
}
