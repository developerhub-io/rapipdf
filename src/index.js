import createPdf from "./rapipdf/pdf-gen";

export async function generatePdfFromOpenAPISpec(jsonSpec, outputFile, options) {
  let config = {
    pdfSortTags: true,
    localize: {
      index: "INDEX",
      api: "API",
      apiList: "API List",
      apiReference: "API Reference",
      apiVersion: "API Version",
      contact: "CONTACT",
      name: "NAME",
      email: "EMAIL",
      url: "URL",
      termsOfService: "Terms of service",
      securityAndAuthentication: "Security and Authentication",
      securitySchemes: "SECURITY SCHEMES",
      key: "KEY",
      type: "TYPE",
      example: "EXAMPLE",
      description: "DESCRIPTION",
      request: "REQUEST",
      requestBody: "REQUEST BODY",
      response: "RESPONSE",
      responseModel: "RESPONSE MODEL",
      statusCode: "STATUS CODE",
      deprecated: "DEPRECATED",
      allowed: "ALLOWED",
      default: "DEFAULT",
      readOnly: "READ ONLY",
      writeOnly: "WRITE ONLY",
      enumValues: "ENUM",
      pattern: "PATTERN",
      parameters: "Parameters",
      noRequestParameters: "No request parameters",
      method: "METHOD",
      pageNumber: "%s of %s",
    },
    pdfTitle: "API Reference",
    pdfCoverText: "Cover-Text",
    pdfSchemaStyle: "table",
    includeToc: true,
    includeApiList: false,
    includeApiDetails: true,
    includeSecurity: true,
    includeInfo: true,
    includeExample: true,
  };

  if (options) {
    config = {
      ...config,
      ...options
    }
  }

  await createPdf(jsonSpec, {
    ...config,
    outputFile: outputFile,
  });
}


