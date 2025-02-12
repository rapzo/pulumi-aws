// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * ## Import
 *
 * ElastiCache users can be imported using the `user_id`, e.g.
 *
 * ```sh
 *  $ pulumi import aws:elasticache/user:User my_user userId1
 * ```
 */
export class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserState, opts?: pulumi.CustomResourceOptions): User {
        return new User(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:elasticache/user:User';

    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is User {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === User.__pulumiType;
    }

    /**
     * Access permissions string used for this user. See [Specifying Permissions Using an Access String](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html#Access-string) for more details.
     */
    public readonly accessString!: pulumi.Output<string>;
    /**
     * The ARN of the created ElastiCache User.
     */
    public readonly arn!: pulumi.Output<string>;
    /**
     * The current supported value is `REDIS`.
     */
    public readonly engine!: pulumi.Output<string>;
    /**
     * Indicates a password is not required for this user.
     */
    public readonly noPasswordRequired!: pulumi.Output<boolean | undefined>;
    /**
     * Passwords used for this user. You can create up to two passwords for each user.
     */
    public readonly passwords!: pulumi.Output<string[] | undefined>;
    /**
     * A list of tags to be added to this resource. A tag is a key-value pair.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    /**
     * The ID of the user.
     */
    public readonly userId!: pulumi.Output<string>;
    /**
     * The username of the user.
     */
    public readonly userName!: pulumi.Output<string>;

    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserArgs | UserState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserState | undefined;
            inputs["accessString"] = state ? state.accessString : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["engine"] = state ? state.engine : undefined;
            inputs["noPasswordRequired"] = state ? state.noPasswordRequired : undefined;
            inputs["passwords"] = state ? state.passwords : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tagsAll"] = state ? state.tagsAll : undefined;
            inputs["userId"] = state ? state.userId : undefined;
            inputs["userName"] = state ? state.userName : undefined;
        } else {
            const args = argsOrState as UserArgs | undefined;
            if ((!args || args.accessString === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessString'");
            }
            if ((!args || args.engine === undefined) && !opts.urn) {
                throw new Error("Missing required property 'engine'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            if ((!args || args.userName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userName'");
            }
            inputs["accessString"] = args ? args.accessString : undefined;
            inputs["arn"] = args ? args.arn : undefined;
            inputs["engine"] = args ? args.engine : undefined;
            inputs["noPasswordRequired"] = args ? args.noPasswordRequired : undefined;
            inputs["passwords"] = args ? args.passwords : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["userId"] = args ? args.userId : undefined;
            inputs["userName"] = args ? args.userName : undefined;
            inputs["tagsAll"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(User.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering User resources.
 */
export interface UserState {
    /**
     * Access permissions string used for this user. See [Specifying Permissions Using an Access String](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html#Access-string) for more details.
     */
    accessString?: pulumi.Input<string>;
    /**
     * The ARN of the created ElastiCache User.
     */
    arn?: pulumi.Input<string>;
    /**
     * The current supported value is `REDIS`.
     */
    engine?: pulumi.Input<string>;
    /**
     * Indicates a password is not required for this user.
     */
    noPasswordRequired?: pulumi.Input<boolean>;
    /**
     * Passwords used for this user. You can create up to two passwords for each user.
     */
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of tags to be added to this resource. A tag is a key-value pair.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The ID of the user.
     */
    userId?: pulumi.Input<string>;
    /**
     * The username of the user.
     */
    userName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * Access permissions string used for this user. See [Specifying Permissions Using an Access String](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html#Access-string) for more details.
     */
    accessString: pulumi.Input<string>;
    /**
     * The ARN of the created ElastiCache User.
     */
    arn?: pulumi.Input<string>;
    /**
     * The current supported value is `REDIS`.
     */
    engine: pulumi.Input<string>;
    /**
     * Indicates a password is not required for this user.
     */
    noPasswordRequired?: pulumi.Input<boolean>;
    /**
     * Passwords used for this user. You can create up to two passwords for each user.
     */
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of tags to be added to this resource. A tag is a key-value pair.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The ID of the user.
     */
    userId: pulumi.Input<string>;
    /**
     * The username of the user.
     */
    userName: pulumi.Input<string>;
}
