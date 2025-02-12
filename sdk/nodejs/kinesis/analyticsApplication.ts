// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../types";
import * as utilities from "../utilities";

import {ARN} from "..";

/**
 * Provides a Kinesis Analytics Application resource. Kinesis Analytics is a managed service that
 * allows processing and analyzing streaming data using standard SQL.
 *
 * For more details, see the [Amazon Kinesis Analytics Documentation](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/what-is.html).
 *
 * > **Note:** To manage Amazon Kinesis Data Analytics for Apache Flink applications, use the `aws.kinesisanalyticsv2.Application` resource.
 *
 * ## Example Usage
 * ### Kinesis Stream Input
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const testStream = new aws.kinesis.Stream("testStream", {shardCount: 1});
 * const testApplication = new aws.kinesis.AnalyticsApplication("testApplication", {inputs: {
 *     namePrefix: "test_prefix",
 *     kinesisStream: {
 *         resourceArn: testStream.arn,
 *         roleArn: aws_iam_role.test.arn,
 *     },
 *     parallelism: {
 *         count: 1,
 *     },
 *     schema: {
 *         recordColumns: [{
 *             mapping: `$.test`,
 *             name: "test",
 *             sqlType: "VARCHAR(8)",
 *         }],
 *         recordEncoding: "UTF-8",
 *         recordFormat: {
 *             mappingParameters: {
 *                 json: {
 *                     recordRowPath: "$",
 *                 },
 *             },
 *         },
 *     },
 * }});
 * ```
 * ### Starting An Application
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const exampleLogGroup = new aws.cloudwatch.LogGroup("exampleLogGroup", {});
 * const exampleLogStream = new aws.cloudwatch.LogStream("exampleLogStream", {logGroupName: exampleLogGroup.name});
 * const exampleStream = new aws.kinesis.Stream("exampleStream", {shardCount: 1});
 * const exampleFirehoseDeliveryStream = new aws.kinesis.FirehoseDeliveryStream("exampleFirehoseDeliveryStream", {
 *     destination: "extended_s3",
 *     extendedS3Configuration: {
 *         bucketArn: aws_s3_bucket.example.arn,
 *         roleArn: aws_iam_role.example.arn,
 *     },
 * });
 * const test = new aws.kinesis.AnalyticsApplication("test", {
 *     cloudwatchLoggingOptions: {
 *         logStreamArn: exampleLogStream.arn,
 *         roleArn: aws_iam_role.example.arn,
 *     },
 *     inputs: {
 *         namePrefix: "example_prefix",
 *         schema: {
 *             recordColumns: [{
 *                 name: "COLUMN_1",
 *                 sqlType: "INTEGER",
 *             }],
 *             recordFormat: {
 *                 mappingParameters: {
 *                     csv: {
 *                         recordColumnDelimiter: ",",
 *                         recordRowDelimiter: "|",
 *                     },
 *                 },
 *             },
 *         },
 *         kinesisStream: {
 *             resourceArn: exampleStream.arn,
 *             roleArn: aws_iam_role.example.arn,
 *         },
 *         startingPositionConfigurations: [{
 *             startingPosition: "NOW",
 *         }],
 *     },
 *     outputs: [{
 *         name: "OUTPUT_1",
 *         schema: {
 *             recordFormatType: "CSV",
 *         },
 *         kinesisFirehose: {
 *             resourceArn: exampleFirehoseDeliveryStream.arn,
 *             roleArn: aws_iam_role.example.arn,
 *         },
 *     }],
 *     startApplication: true,
 * });
 * ```
 *
 * ## Import
 *
 * Kinesis Analytics Application can be imported by using ARN, e.g.
 *
 * ```sh
 *  $ pulumi import aws:kinesis/analyticsApplication:AnalyticsApplication example arn:aws:kinesisanalytics:us-west-2:1234567890:application/example
 * ```
 */
export class AnalyticsApplication extends pulumi.CustomResource {
    /**
     * Get an existing AnalyticsApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AnalyticsApplicationState, opts?: pulumi.CustomResourceOptions): AnalyticsApplication {
        return new AnalyticsApplication(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:kinesis/analyticsApplication:AnalyticsApplication';

    /**
     * Returns true if the given object is an instance of AnalyticsApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AnalyticsApplication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AnalyticsApplication.__pulumiType;
    }

    /**
     * The ARN of the Kinesis Analytics Appliation.
     */
    public /*out*/ readonly arn!: pulumi.Output<ARN>;
    /**
     * The CloudWatch log stream options to monitor application errors.
     * See CloudWatch Logging Options below for more details.
     */
    public readonly cloudwatchLoggingOptions!: pulumi.Output<outputs.kinesis.AnalyticsApplicationCloudwatchLoggingOptions | undefined>;
    /**
     * SQL Code to transform input data, and generate output.
     */
    public readonly code!: pulumi.Output<string | undefined>;
    /**
     * The Timestamp when the application version was created.
     */
    public /*out*/ readonly createTimestamp!: pulumi.Output<string>;
    /**
     * Description of the application.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Input configuration of the application. See Inputs below for more details.
     */
    public readonly inputs!: pulumi.Output<outputs.kinesis.AnalyticsApplicationInputs | undefined>;
    /**
     * The Timestamp when the application was last updated.
     */
    public /*out*/ readonly lastUpdateTimestamp!: pulumi.Output<string>;
    /**
     * Name of the Kinesis Analytics Application.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Output destination configuration of the application. See Outputs below for more details.
     */
    public readonly outputs!: pulumi.Output<outputs.kinesis.AnalyticsApplicationOutput[] | undefined>;
    /**
     * An S3 Reference Data Source for the application.
     * See Reference Data Sources below for more details.
     */
    public readonly referenceDataSources!: pulumi.Output<outputs.kinesis.AnalyticsApplicationReferenceDataSources | undefined>;
    /**
     * Whether to start or stop the Kinesis Analytics Application. To start an application, an input with a defined `startingPosition` must be configured.
     * To modify an application's starting position, first stop the application by setting `startApplication = false`, then update `startingPosition` and set `startApplication = true`.
     */
    public readonly startApplication!: pulumi.Output<boolean | undefined>;
    /**
     * The Status of the application.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    /**
     * The Version of the application.
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a AnalyticsApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AnalyticsApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AnalyticsApplicationArgs | AnalyticsApplicationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AnalyticsApplicationState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["cloudwatchLoggingOptions"] = state ? state.cloudwatchLoggingOptions : undefined;
            inputs["code"] = state ? state.code : undefined;
            inputs["createTimestamp"] = state ? state.createTimestamp : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["inputs"] = state ? state.inputs : undefined;
            inputs["lastUpdateTimestamp"] = state ? state.lastUpdateTimestamp : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["outputs"] = state ? state.outputs : undefined;
            inputs["referenceDataSources"] = state ? state.referenceDataSources : undefined;
            inputs["startApplication"] = state ? state.startApplication : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tagsAll"] = state ? state.tagsAll : undefined;
            inputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as AnalyticsApplicationArgs | undefined;
            inputs["cloudwatchLoggingOptions"] = args ? args.cloudwatchLoggingOptions : undefined;
            inputs["code"] = args ? args.code : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["inputs"] = args ? args.inputs : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["outputs"] = args ? args.outputs : undefined;
            inputs["referenceDataSources"] = args ? args.referenceDataSources : undefined;
            inputs["startApplication"] = args ? args.startApplication : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["createTimestamp"] = undefined /*out*/;
            inputs["lastUpdateTimestamp"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["tagsAll"] = undefined /*out*/;
            inputs["version"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(AnalyticsApplication.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AnalyticsApplication resources.
 */
export interface AnalyticsApplicationState {
    /**
     * The ARN of the Kinesis Analytics Appliation.
     */
    arn?: pulumi.Input<ARN>;
    /**
     * The CloudWatch log stream options to monitor application errors.
     * See CloudWatch Logging Options below for more details.
     */
    cloudwatchLoggingOptions?: pulumi.Input<inputs.kinesis.AnalyticsApplicationCloudwatchLoggingOptions>;
    /**
     * SQL Code to transform input data, and generate output.
     */
    code?: pulumi.Input<string>;
    /**
     * The Timestamp when the application version was created.
     */
    createTimestamp?: pulumi.Input<string>;
    /**
     * Description of the application.
     */
    description?: pulumi.Input<string>;
    /**
     * Input configuration of the application. See Inputs below for more details.
     */
    inputs?: pulumi.Input<inputs.kinesis.AnalyticsApplicationInputs>;
    /**
     * The Timestamp when the application was last updated.
     */
    lastUpdateTimestamp?: pulumi.Input<string>;
    /**
     * Name of the Kinesis Analytics Application.
     */
    name?: pulumi.Input<string>;
    /**
     * Output destination configuration of the application. See Outputs below for more details.
     */
    outputs?: pulumi.Input<pulumi.Input<inputs.kinesis.AnalyticsApplicationOutput>[]>;
    /**
     * An S3 Reference Data Source for the application.
     * See Reference Data Sources below for more details.
     */
    referenceDataSources?: pulumi.Input<inputs.kinesis.AnalyticsApplicationReferenceDataSources>;
    /**
     * Whether to start or stop the Kinesis Analytics Application. To start an application, an input with a defined `startingPosition` must be configured.
     * To modify an application's starting position, first stop the application by setting `startApplication = false`, then update `startingPosition` and set `startApplication = true`.
     */
    startApplication?: pulumi.Input<boolean>;
    /**
     * The Status of the application.
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Version of the application.
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a AnalyticsApplication resource.
 */
export interface AnalyticsApplicationArgs {
    /**
     * The CloudWatch log stream options to monitor application errors.
     * See CloudWatch Logging Options below for more details.
     */
    cloudwatchLoggingOptions?: pulumi.Input<inputs.kinesis.AnalyticsApplicationCloudwatchLoggingOptions>;
    /**
     * SQL Code to transform input data, and generate output.
     */
    code?: pulumi.Input<string>;
    /**
     * Description of the application.
     */
    description?: pulumi.Input<string>;
    /**
     * Input configuration of the application. See Inputs below for more details.
     */
    inputs?: pulumi.Input<inputs.kinesis.AnalyticsApplicationInputs>;
    /**
     * Name of the Kinesis Analytics Application.
     */
    name?: pulumi.Input<string>;
    /**
     * Output destination configuration of the application. See Outputs below for more details.
     */
    outputs?: pulumi.Input<pulumi.Input<inputs.kinesis.AnalyticsApplicationOutput>[]>;
    /**
     * An S3 Reference Data Source for the application.
     * See Reference Data Sources below for more details.
     */
    referenceDataSources?: pulumi.Input<inputs.kinesis.AnalyticsApplicationReferenceDataSources>;
    /**
     * Whether to start or stop the Kinesis Analytics Application. To start an application, an input with a defined `startingPosition` must be configured.
     * To modify an application's starting position, first stop the application by setting `startApplication = false`, then update `startingPosition` and set `startApplication = true`.
     */
    startApplication?: pulumi.Input<boolean>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
