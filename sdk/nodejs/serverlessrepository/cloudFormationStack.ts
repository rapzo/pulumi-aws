// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Deploys an Application CloudFormation Stack from the Serverless Application Repository.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const currentPartition = pulumi.output(aws.getPartition());
 * const currentRegion = pulumi.output(aws.getRegion());
 * const postgres_rotator = new aws.serverlessrepository.CloudFormationStack("postgres-rotator", {
 *     applicationId: "arn:aws:serverlessrepo:us-east-1:297356227824:applications/SecretsManagerRDSPostgreSQLRotationSingleUser",
 *     capabilities: [
 *         "CAPABILITY_IAM",
 *         "CAPABILITY_RESOURCE_POLICY",
 *     ],
 *     parameters: {
 *         endpoint: pulumi.interpolate`secretsmanager.${currentRegion.name!}.${currentPartition.dnsSuffix}`,
 *         functionName: "func-postgres-rotator",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Serverless Application Repository Stack can be imported using the CloudFormation Stack name (with or without the `serverlessrepo-` prefix) or the CloudFormation Stack ID, e.g.
 *
 * ```sh
 *  $ pulumi import aws:serverlessrepository/cloudFormationStack:CloudFormationStack example serverlessrepo-postgres-rotator
 * ```
 */
export class CloudFormationStack extends pulumi.CustomResource {
    /**
     * Get an existing CloudFormationStack resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudFormationStackState, opts?: pulumi.CustomResourceOptions): CloudFormationStack {
        return new CloudFormationStack(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:serverlessrepository/cloudFormationStack:CloudFormationStack';

    /**
     * Returns true if the given object is an instance of CloudFormationStack.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudFormationStack {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudFormationStack.__pulumiType;
    }

    /**
     * The ARN of the application from the Serverless Application Repository.
     */
    public readonly applicationId!: pulumi.Output<string>;
    /**
     * A list of capabilities. Valid values are `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_RESOURCE_POLICY`, or `CAPABILITY_AUTO_EXPAND`
     */
    public readonly capabilities!: pulumi.Output<string[]>;
    /**
     * The name of the stack to create. The resource deployed in AWS will be prefixed with `serverlessrepo-`
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A map of outputs from the stack.
     */
    public /*out*/ readonly outputs!: pulumi.Output<{[key: string]: string}>;
    /**
     * A map of Parameter structures that specify input parameters for the stack.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: string}>;
    /**
     * The version of the application to deploy. If not supplied, deploys the latest version.
     */
    public readonly semanticVersion!: pulumi.Output<string>;
    /**
     * A list of tags to associate with this stack. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A map of tags assigned to the resource, including those inherited from the provider .
     */
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a CloudFormationStack resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudFormationStackArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudFormationStackArgs | CloudFormationStackState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudFormationStackState | undefined;
            inputs["applicationId"] = state ? state.applicationId : undefined;
            inputs["capabilities"] = state ? state.capabilities : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["outputs"] = state ? state.outputs : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
            inputs["semanticVersion"] = state ? state.semanticVersion : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as CloudFormationStackArgs | undefined;
            if ((!args || args.applicationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationId'");
            }
            if ((!args || args.capabilities === undefined) && !opts.urn) {
                throw new Error("Missing required property 'capabilities'");
            }
            inputs["applicationId"] = args ? args.applicationId : undefined;
            inputs["capabilities"] = args ? args.capabilities : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
            inputs["semanticVersion"] = args ? args.semanticVersion : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["outputs"] = undefined /*out*/;
            inputs["tagsAll"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(CloudFormationStack.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering CloudFormationStack resources.
 */
export interface CloudFormationStackState {
    /**
     * The ARN of the application from the Serverless Application Repository.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * A list of capabilities. Valid values are `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_RESOURCE_POLICY`, or `CAPABILITY_AUTO_EXPAND`
     */
    capabilities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the stack to create. The resource deployed in AWS will be prefixed with `serverlessrepo-`
     */
    name?: pulumi.Input<string>;
    /**
     * A map of outputs from the stack.
     */
    outputs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A map of Parameter structures that specify input parameters for the stack.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The version of the application to deploy. If not supplied, deploys the latest version.
     */
    semanticVersion?: pulumi.Input<string>;
    /**
     * A list of tags to associate with this stack. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A map of tags assigned to the resource, including those inherited from the provider .
     */
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a CloudFormationStack resource.
 */
export interface CloudFormationStackArgs {
    /**
     * The ARN of the application from the Serverless Application Repository.
     */
    applicationId: pulumi.Input<string>;
    /**
     * A list of capabilities. Valid values are `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_RESOURCE_POLICY`, or `CAPABILITY_AUTO_EXPAND`
     */
    capabilities: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the stack to create. The resource deployed in AWS will be prefixed with `serverlessrepo-`
     */
    name?: pulumi.Input<string>;
    /**
     * A map of Parameter structures that specify input parameters for the stack.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The version of the application to deploy. If not supplied, deploys the latest version.
     */
    semanticVersion?: pulumi.Input<string>;
    /**
     * A list of tags to associate with this stack. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
