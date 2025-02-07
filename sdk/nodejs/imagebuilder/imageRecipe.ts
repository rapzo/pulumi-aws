// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../types";
import * as utilities from "../utilities";

/**
 * Manages an Image Builder Image Recipe.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.imagebuilder.ImageRecipe("example", {
 *     blockDeviceMappings: [{
 *         deviceName: "/dev/xvdb",
 *         ebs: {
 *             deleteOnTermination: true,
 *             volumeSize: 100,
 *             volumeType: "gp2",
 *         },
 *     }],
 *     components: [{
 *         componentArn: aws_imagebuilder_component.example.arn,
 *     }],
 *     parentImage: `arn:${data.aws_partition.current.partition}:imagebuilder:${data.aws_region.current.name}:aws:image/amazon-linux-2-x86/x.x.x`,
 *     version: "1.0.0",
 * });
 * ```
 *
 * ## Import
 *
 * `aws_imagebuilder_image_recipe` resources can be imported by using the Amazon Resource Name (ARN), e.g.
 *
 * ```sh
 *  $ pulumi import aws:imagebuilder/imageRecipe:ImageRecipe example arn:aws:imagebuilder:us-east-1:123456789012:image-recipe/example/1.0.0
 * ```
 */
export class ImageRecipe extends pulumi.CustomResource {
    /**
     * Get an existing ImageRecipe resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImageRecipeState, opts?: pulumi.CustomResourceOptions): ImageRecipe {
        return new ImageRecipe(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:imagebuilder/imageRecipe:ImageRecipe';

    /**
     * Returns true if the given object is an instance of ImageRecipe.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImageRecipe {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImageRecipe.__pulumiType;
    }

    /**
     * (Required) Amazon Resource Name (ARN) of the image recipe.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Configuration block(s) with block device mappings for the the image recipe. Detailed below.
     */
    public readonly blockDeviceMappings!: pulumi.Output<outputs.imagebuilder.ImageRecipeBlockDeviceMapping[] | undefined>;
    /**
     * Ordered configuration block(s) with components for the image recipe. Detailed below.
     */
    public readonly components!: pulumi.Output<outputs.imagebuilder.ImageRecipeComponent[]>;
    /**
     * Date the image recipe was created.
     */
    public /*out*/ readonly dateCreated!: pulumi.Output<string>;
    /**
     * Description of the image recipe.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the image recipe.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Owner of the image recipe.
     */
    public /*out*/ readonly owner!: pulumi.Output<string>;
    /**
     * Platform of the image recipe.
     */
    public readonly parentImage!: pulumi.Output<string>;
    /**
     * Platform of the image recipe.
     */
    public /*out*/ readonly platform!: pulumi.Output<string>;
    /**
     * Key-value map of resource tags for the image recipe. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A map of tags assigned to the resource, including those inherited from the provider .
     */
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    /**
     * Version of the image recipe.
     */
    public readonly version!: pulumi.Output<string>;
    /**
     * The working directory to be used during build and test workflows.
     */
    public readonly workingDirectory!: pulumi.Output<string | undefined>;

    /**
     * Create a ImageRecipe resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImageRecipeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImageRecipeArgs | ImageRecipeState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImageRecipeState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["blockDeviceMappings"] = state ? state.blockDeviceMappings : undefined;
            inputs["components"] = state ? state.components : undefined;
            inputs["dateCreated"] = state ? state.dateCreated : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["owner"] = state ? state.owner : undefined;
            inputs["parentImage"] = state ? state.parentImage : undefined;
            inputs["platform"] = state ? state.platform : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tagsAll"] = state ? state.tagsAll : undefined;
            inputs["version"] = state ? state.version : undefined;
            inputs["workingDirectory"] = state ? state.workingDirectory : undefined;
        } else {
            const args = argsOrState as ImageRecipeArgs | undefined;
            if ((!args || args.components === undefined) && !opts.urn) {
                throw new Error("Missing required property 'components'");
            }
            if ((!args || args.parentImage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentImage'");
            }
            if ((!args || args.version === undefined) && !opts.urn) {
                throw new Error("Missing required property 'version'");
            }
            inputs["blockDeviceMappings"] = args ? args.blockDeviceMappings : undefined;
            inputs["components"] = args ? args.components : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parentImage"] = args ? args.parentImage : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["version"] = args ? args.version : undefined;
            inputs["workingDirectory"] = args ? args.workingDirectory : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["dateCreated"] = undefined /*out*/;
            inputs["owner"] = undefined /*out*/;
            inputs["platform"] = undefined /*out*/;
            inputs["tagsAll"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(ImageRecipe.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ImageRecipe resources.
 */
export interface ImageRecipeState {
    /**
     * (Required) Amazon Resource Name (ARN) of the image recipe.
     */
    arn?: pulumi.Input<string>;
    /**
     * Configuration block(s) with block device mappings for the the image recipe. Detailed below.
     */
    blockDeviceMappings?: pulumi.Input<pulumi.Input<inputs.imagebuilder.ImageRecipeBlockDeviceMapping>[]>;
    /**
     * Ordered configuration block(s) with components for the image recipe. Detailed below.
     */
    components?: pulumi.Input<pulumi.Input<inputs.imagebuilder.ImageRecipeComponent>[]>;
    /**
     * Date the image recipe was created.
     */
    dateCreated?: pulumi.Input<string>;
    /**
     * Description of the image recipe.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the image recipe.
     */
    name?: pulumi.Input<string>;
    /**
     * Owner of the image recipe.
     */
    owner?: pulumi.Input<string>;
    /**
     * Platform of the image recipe.
     */
    parentImage?: pulumi.Input<string>;
    /**
     * Platform of the image recipe.
     */
    platform?: pulumi.Input<string>;
    /**
     * Key-value map of resource tags for the image recipe. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A map of tags assigned to the resource, including those inherited from the provider .
     */
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Version of the image recipe.
     */
    version?: pulumi.Input<string>;
    /**
     * The working directory to be used during build and test workflows.
     */
    workingDirectory?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ImageRecipe resource.
 */
export interface ImageRecipeArgs {
    /**
     * Configuration block(s) with block device mappings for the the image recipe. Detailed below.
     */
    blockDeviceMappings?: pulumi.Input<pulumi.Input<inputs.imagebuilder.ImageRecipeBlockDeviceMapping>[]>;
    /**
     * Ordered configuration block(s) with components for the image recipe. Detailed below.
     */
    components: pulumi.Input<pulumi.Input<inputs.imagebuilder.ImageRecipeComponent>[]>;
    /**
     * Description of the image recipe.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the image recipe.
     */
    name?: pulumi.Input<string>;
    /**
     * Platform of the image recipe.
     */
    parentImage: pulumi.Input<string>;
    /**
     * Key-value map of resource tags for the image recipe. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Version of the image recipe.
     */
    version: pulumi.Input<string>;
    /**
     * The working directory to be used during build and test workflows.
     */
    workingDirectory?: pulumi.Input<string>;
}
