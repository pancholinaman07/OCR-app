# API Documentation

This document provides information about the APIs in this project.

![Data Flow Diagram](DFD.jpg)

## Table of Contents

- [Home](#home)
- [Add Record](#add-record)
- [Record Details](#record-details)
- [Edit Record](#edit-record)
- [Delete Record](#delete-record)
- [History Page](#history-page)


## Home

### `GET /`

The home route where two buttons appear:

- **ADD RECORD**: Adds a new record to the database.
- **SHOW HISTORY**: Shows the history of records.

## Add Record

### `GET /record/add`

Renders the `addRecord` page, allowing users to input an image (less than 2MB, JPG, JPEG, PNG only). After clicking the submit button, a `POST /record/add` request is made. The server calls the Google Vision API to extract data, saves it to the database, and redirects to `/record/:recordId`.

### `POST /record/add`

Creates a new record by calling the Google Vision API to extract data from the submitted image and saves it to the database. Redirects to `/record/:recordId`.

## Record Details

### `GET /record/:recordId`

Displays information about a specific record, including its status and extracted information. Provides a button to edit the record.

## Edit Record

### `GET /record/edit/:recordId`

Renders a form to edit the given record, allowing users to change the extracted information , or they can Delete the record which calls `record/delete/:recordId`.

### `POST /record/edit/:recordId`

Updates the information of the specified record based on the submitted form.

## Delete Record

### `GET /record/delete/:recordId`

Deletes the record from database if recordId exists.

## History Page

### `GET /record/history`

Renders the history page containing all past submitted records. Includes filter options to search through records based on status, creation date, date of birth, date of issue, and date of expiry. Users can choose any combination to filter the history of records.

