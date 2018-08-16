#!/bin/bash
# @author:  Nic Bertino
# @description: Syncs up brand.scu.edu over SFTP.
# LFTP to server and sync brand

ftp_credentials="ftp_credentials.sh"

sync_brand () {
  lftp ftp://${ftp_user}:${ftp_password}@brand.scu.edu<<END_SCRIPT

  echo "Successfully connected to Brand."

  echo "Sync status: dist"

  mirror -R ./dist .

  echo "dist complete."

  echo "Sync status: /assets"

  mirror -R ./assets ./assets

  echo "/assets complete."

  echo "Sync status: /public"

  mirror -R ./public ./public

  echo "/public complete."

  echo "*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~"

  echo "Congratulations! The Design System has been deployed."

  exit
END_SCRIPT
  date
}

if [ -f "$ftp_credentials" ]
then
  source ftp_credentials.sh
  sync_brand
else
  echo "Couldn't find ftp_credentials.sh within this directory. Please create the file with your FTP credentials before proceeding."
fi
