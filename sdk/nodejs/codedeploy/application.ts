// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a CodeDeploy application to be used as a basis for deployments
 *
 * ## Example Usage
 * ### ECS Application
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.codedeploy.Application("example", {
 *     computePlatform: "ECS",
 * });
 * ```
 * ### Lambda Application
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.codedeploy.Application("example", {
 *     computePlatform: "Lambda",
 * });
 * ```
 * ### Server Application
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.codedeploy.Application("example", {
 *     computePlatform: "Server",
 * });
 * ```
 *
 * ## Import
 *
 * CodeDeploy Applications can be imported using the `name`, e.g.
 *
 * ```sh
 *  $ pulumi import aws:codedeploy/application:Application example my-application
 * ```
 */
export class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationState, opts?: pulumi.CustomResourceOptions): Application {
        return new Application(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:codedeploy/application:Application';

    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Application {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Application.__pulumiType;
    }

    /**
     * The application ID.
     */
    public /*out*/ readonly applicationId!: pulumi.Output<string>;
    /**
     * The ARN of the CodeDeploy application.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The compute platform can either be `ECS`, `Lambda`, or `Server`. Default is `Server`.
     */
    public readonly computePlatform!: pulumi.Output<string | undefined>;
    /**
     * The name for a connection to a GitHub account.
     */
    public /*out*/ readonly githubAccountName!: pulumi.Output<string>;
    /**
     * Whether the user has authenticated with GitHub for the specified application.
     */
    public /*out*/ readonly linkedToGithub!: pulumi.Output<boolean>;
    /**
     * The name of the application.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Key-value map of resource tags. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A map of tags assigned to the resource, including those inherited from the provider .
     */
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationArgs | ApplicationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationState | undefined;
            inputs["applicationId"] = state ? state.applicationId : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["computePlatform"] = state ? state.computePlatform : undefined;
            inputs["githubAccountName"] = state ? state.githubAccountName : undefined;
            inputs["linkedToGithub"] = state ? state.linkedToGithub : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as ApplicationArgs | undefined;
            inputs["computePlatform"] = args ? args.computePlatform : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["applicationId"] = undefined /*out*/;
            inputs["arn"] = undefined /*out*/;
            inputs["githubAccountName"] = undefined /*out*/;
            inputs["linkedToGithub"] = undefined /*out*/;
            inputs["tagsAll"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(Application.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Application resources.
 */
export interface ApplicationState {
    /**
     * The application ID.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * The ARN of the CodeDeploy application.
     */
    arn?: pulumi.Input<string>;
    /**
     * The compute platform can either be `ECS`, `Lambda`, or `Server`. Default is `Server`.
     */
    computePlatform?: pulumi.Input<string>;
    /**
     * The name for a connection to a GitHub account.
     */
    githubAccountName?: pulumi.Input<string>;
    /**
     * Whether the user has authenticated with GitHub for the specified application.
     */
    linkedToGithub?: pulumi.Input<boolean>;
    /**
     * The name of the application.
     */
    name?: pulumi.Input<string>;
    /**
     * Key-value map of resource tags. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A map of tags assigned to the resource, including those inherited from the provider .
     */
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * The compute platform can either be `ECS`, `Lambda`, or `Server`. Default is `Server`.
     */
    computePlatform?: pulumi.Input<string>;
    /**
     * The name of the application.
     */
    name?: pulumi.Input<string>;
    /**
     * Key-value map of resource tags. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
